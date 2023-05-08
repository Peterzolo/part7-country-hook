import React, { useEffect, useState } from "react";
import {
  commentBlogFromService,
  deleteBlogFromService,
  getBlogFromService,
  likeBlogFromService,
} from "../../redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  hideNotification,
  showError,
  showSuccess,
} from "../../redux/reducers/notification/notificationReducer";

const BlogDetailWrap = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fafafa;
`;
const Title = styled.h2``;
const Author = styled.h5``;
const Url = styled.p``;
const ButtonGroup = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;
const LikeWrap = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  /* padding: 10px; */
`;
const LikeCount = styled.h5``;
const LikeTitle = styled.h6``;
const LikeButton = styled.button``;
const DeleteButton = styled.button``;

const CommentWrap = styled.div``;
const CommentForm = styled.form``;
const CommentInput = styled.input``;

const CommentBtn = styled.button``;
const CommentBody = styled.div``;

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogs);
  console.log("BLOG----", blog.comments?.content);
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(!isLoggedIn);
  const [content, setContent] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    }
  }, []);
  useEffect(() => {
    const fetchBlogDetail = async () => {
      dispatch(getBlogFromService(id));
    };
    fetchBlogDetail();
  }, [dispatch, id]);

  useEffect(() => {
    setDisabled(!isLoggedIn);
  }, [isLoggedIn]);

  const handleLike = async () => {
    try {
      const liked = dispatch(likeBlogFromService(blog.id));
      if (liked) {
        dispatch(showSuccess("Blog successfully liked"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        navigate(`/`);
      } else {
        dispatch(showError("Could not like blog"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      }
    } catch (error) {
      dispatch(showError(error));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
    }
  };
  const handleDelete = async () => {
    try {
      await dispatch(deleteBlogFromService(id));
      dispatch(showSuccess("Blog successfully deleted"));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
      navigate(`/`);
    } catch (error) {
      dispatch(showError(error));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const newContent = {
        content: content,
        id: blog.id,
      };
      const result = dispatch(commentBlogFromService(newContent));
      if (result) {
        dispatch(showSuccess("Blog successfully liked"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
        navigate(`/`);
      } else {
        dispatch(showError("Could not like blog"));
        setTimeout(() => {
          dispatch(hideNotification());
        }, 5000);
      }
    } catch (error) {
      dispatch(showError("Could not like blog"));
      setTimeout(() => {
        dispatch(hideNotification());
      }, 5000);
    }
  };

  return (
    <BlogDetailWrap>
      {!isLoggedIn && <div>Log in to comment and like</div>}
      <Title>Title : {blog?.title}</Title>
      <Author>Author: {blog.author}</Author>
      <Url>url: {blog.url}</Url>
      <ButtonGroup>
        <LikeWrap>
          <LikeCount>Likes:{blog.likes}</LikeCount>
          <LikeButton
            className={disabled ? "like-btn-disabled" : "like-btn-enabled"}
            onClick={handleLike}
            disabled={!isLoggedIn}
          >
            Like
          </LikeButton>
        </LikeWrap>

        <DeleteButton
          className={disabled ? "delete-btn-disabled" : "delete-btn-enabled"}
          onClick={handleDelete}
          disabled={!isLoggedIn}
        >
          Delete
        </DeleteButton>
      </ButtonGroup>
      <CommentWrap>
        <CommentForm onSubmit={handleCommentSubmit}>
          <CommentInput
            type="texr"
            placeholder="Add your comment here ..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={!isLoggedIn}
          />
          <CommentBtn type="submit" disabled={!isLoggedIn}>
            Add Comment
          </CommentBtn>
        </CommentForm>
        <CommentBody>
          {blog.comments &&
            blog.comments.map((comment) => (
              <CommentBody key={comment.id}>{comment.content}</CommentBody>
            ))}
        </CommentBody>
      </CommentWrap>
    </BlogDetailWrap>
  );
};

export default BlogDetails;

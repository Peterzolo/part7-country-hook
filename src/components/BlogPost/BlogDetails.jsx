import React, { useEffect, useState } from "react";
import {
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

const BlogDetailWrap = styled.div``;
const Title = styled.h2``;
const Author = styled.h3``;
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

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogs);
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(!isLoggedIn);

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

  return (
    <BlogDetailWrap>
      <Title>{blog?.title}</Title>
      <Author>{blog.auth}</Author>
      <Url>{blog.url}</Url>
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
    </BlogDetailWrap>
  );
};

export default BlogDetails;

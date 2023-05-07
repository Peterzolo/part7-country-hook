import React, { useEffect } from "react";
import { getBlogFromService } from "../../redux/actions/blogAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BlogDetailWrap = styled.div``;
const Title = styled.h2``;
const Author = styled.h3``;
const Url = styled.p``;
const LikeWrap = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const LikeCount = styled.h5``;
const LikeTitle = styled.h6``;
const LikeButton = styled.button``;

const BlogDetails = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blogs);
  const { id } = useParams();
  useEffect(() => {
    const fetchBlogDetail = async () => {
      dispatch(getBlogFromService(id));
    };
    fetchBlogDetail();
  }, [dispatch, id]);

  return (
    <BlogDetailWrap>
      <Title>{blog?.title}</Title>
      <Author>{blog.auth}</Author>
      <Url>{blog.url}</Url>
      <LikeWrap>
        <LikeCount>{blog.likes}</LikeCount>
        <LikeTitle>Likes</LikeTitle>
        <LikeButton onClick={handlelike}>likes</LikeButton>
      </LikeWrap>
    </BlogDetailWrap>
  );
};

export default BlogDetails;

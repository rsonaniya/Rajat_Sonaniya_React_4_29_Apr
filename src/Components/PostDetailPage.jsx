import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPosts, selectAllPosts } from "../features/posts/postsSlice";

export default function PostDetailPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { id } = useParams();

  const renderpost = posts.find((post) => post.id === Number(id));

  return (
    <div>
      <div className="d-flex justify-content-between">
        <h5 className="text-light">Details page For Post With ID {renderpost.id}</h5>
        <button className="btn btn-outline-danger" onClick={() => navigate("/")}>
          Close
        </button>
      </div>
      <img src={`https://picsum.photos/600?random=${renderpost.id}`} alt="" className="rounded" />
      <h5 className="text-light my-2">User ID: {renderpost.userId}</h5>
      <h5 className="text-light my-2">Title: {renderpost.title}</h5>
      <h5 className="text-light my-2">Body: {renderpost.body}</h5>
    </div>
  );
}

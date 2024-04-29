import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectAllPosts, fetchPosts } from "../features/posts/postsSlice";
import { useNavigate } from "react-router-dom";

export default function AllPosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="row mt-3">
      {posts.map((post) => (
        <div className="col-md-3" key={post.id} onClick={() => navigate(`/Post/${post.id}`)}>
          <div className="p-2 border m-2 rounded">
            <img
              className="text-center rounded-top"
              src={`https://picsum.photos/600?random=${post.id}`}
              alt=""
              width="100%"
            />
            <h5 className="text-center text-secondary mt-2">User Id:{post.id}</h5>
            <h5 className="text-center text-secondary">Title:{post.title.substring(0, 10)}</h5>
            <p className="text-center text-secondary">Body:{post.title.substring(0, 15)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

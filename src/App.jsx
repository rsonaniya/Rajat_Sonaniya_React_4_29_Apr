import { Route, Routes } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import PostDetailPage from "./Components/PostDetailPage";

export default function App() {
  return (
    <div className="container">
      <h3 className="text-light my-3">Social Media App</h3>
      <hr className="text-light" />
      <Routes>
        <Route path="" element={<AllPosts />} />
        <Route path="Post/:id" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}

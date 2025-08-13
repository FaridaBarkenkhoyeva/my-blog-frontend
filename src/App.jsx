import { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useAppContext } from "./context/appContext";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import UpdatePostPage from "./pages/UpdatePostPage";
import axios from "axios";

function App() {
  //  const {} = useAppContext()

  return (
    <>
      <div>
        <nav>
          <Link to="/">Homepage</Link> |{" "}
          <Link to="/create-post">Create Post page</Link> |{" "}
          <Link to="/posts/:id">Post Details page</Link> |{" "}
          <Link to="/posts/:id/edit">Update post page</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="/posts/:id/edit" element={<UpdatePostPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

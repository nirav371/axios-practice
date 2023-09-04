import "./App.css";
import useAxios from "./hooks/useAxios";
import PostDisplay from "./components/PostDisplay";
import { useState } from "react";
import UpdatePost from "./components/UpdatePost";

const App = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/posts/";

  const {
    Post,
    myData,
    isError,
    createPost,
    updatePostNavigator,
    updatePost,
    setupdatePost,
    deletePost
  } = useAxios(baseURL);

  return (
    <>
      <h1>Axios</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <PostDisplay
        baseURL={baseURL}
        myData={myData}
        updatePostNavigator={updatePostNavigator}
        deletePost={deletePost}
      />

      <div className="button-container">
        <button onClick={() => createPost()}>Create Post</button>
      </div>
      <UpdatePost
        baseURL={baseURL}
        Post={Post}
        updatePost={updatePost}
        setupdatePost={setupdatePost}
      />
    </>
  );
};

export default App;

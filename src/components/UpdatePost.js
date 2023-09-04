import React from "react";


const UpdatePost = ({Post, updatePost, setupdatePost}) => {

  return (
    <>
      <div className="form-container">
        <label htmlFor="id">Id</label>
        <input
          type="text"
          placeholder="Id"
          className="input-field"
          value={Post.id}
          onChange={(e) => setupdatePost({ ...Post, id: e.target.value })}
        />
        <label htmlFor="title">Title</label>
        <input
          className="input-field"
          placeholder="Title"
          type="text"
          value={Post.title}
          onChange={(e) => setupdatePost({ ...Post, title: e.target.value })}
        />
        <label htmlFor="body">Body</label>
        <input
          className="input-field"
          placeholder="Body"
          type="text"
          value={Post.body}
          onChange={(e) => setupdatePost({ ...Post, body: e.target.value })}
        />
        <div className="button-container">
        
          <button onClick={() => updatePost(Post)}>Update Post</button>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;

import React from 'react'
import useAxios from '../hooks/useAxios';

const PostDisplay = ({ baseURL, myData, updatePostNavigator, deletePost}) => {
 
  return (
    <>
        <div className="grid">
        {myData.map((post) => {
          const { body, id, title } = post;
          
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
              <button
                className="update-button"
                onClick={() => updatePostNavigator(+id)}
              >
                Update Post
              </button>
              <button className="delete-button" onClick={() => deletePost(+id)}>
                Delete Post
              </button>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default PostDisplay
import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (baseURL) => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  const [Post, setupdatePost] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    getMyPostData();
  }, []);

  const getMyPostData = async () => {
    try {
      const res = await axios.get(baseURL);
      setMyData(res.data.slice(0, 12));
    } catch (error) {
      console.log(error);
      setIsError(error.message);
    }
  };

  const deletePost = (ide = 1) => {
    // console.log(ide)
    axios.delete(`${baseURL}/${ide}`).then(() => {
      myData.splice(ide - 1, 1);
      const mData = [...myData];
      setMyData(mData);
    });
  };

  const createPost = () => {
    axios
      .post(baseURL, {
        id: Math.floor(Math.random() * 1000),
        title: "hello, i am nirav ",
        body: "gkslj jkjsooiteoitg gjoiernvm oigjfvm og iogjs ogoifujgiosmg oifg oimjfdgosij oifgjios poigjisgj",
      })
      .then((response) => {
        console.log(response);
        setMyData([...myData, response.data]);
      });
  };

  const updatePost = (Post) => {
    axios
      .put(`${baseURL}/${Post.id}`, {
        id: Post.id,
        title: Post.title,
        body: Post.body,
      })
      .then((response) => {
        const updatedArray = myData.map((post) => {
          return Post.id === post.id ? response.data : post;
        });
        console.log(updatedArray);
        setMyData(updatedArray);
      });
  };

  const updatePostNavigator = (ide) => {
    setupdatePost(myData[ide - 1]);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return {
    Post,
    myData,
    isError,
    getMyPostData,
    deletePost,
    createPost,
    updatePost,
    updatePostNavigator,
    setupdatePost,
  };
};

export default useAxios;

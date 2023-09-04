import axios from 'axios';
import {useState, useEffect} from 'react'

const useGetMyPostData = (baseURL) => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState('');
    useEffect(() => {
        const getMyPostData = async () => {
          try {
            const res = await axios.get(baseURL);
            setMyData(res.data.slice(0, 12));
          } catch (error) {
            console.log(error);
            setIsError(error.message);
          }
        };
        getMyPostData();   
      }, [baseURL]);
  return {
    myData,
    isError
  }
}

export default useGetMyPostData
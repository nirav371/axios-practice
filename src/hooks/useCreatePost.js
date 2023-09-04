import axios from 'axios';


const useCreatePost = (baseURL, myData) => {
    axios
      .post(baseURL, {
        id: Math.floor(Math.random() * 1000),
        title: "hello, i am nirav ",
        body: "gkslj jkjsooiteoitg gjoiernvm oigjfvm og iogjs ogoifujgiosmg oifg oimjfdgosij oifgjios poigjisgj",
      })
      .then((response) => {
        console.log(response);
        // setMyData([...myData, response.data]);
      });
  return {

  }
}

export default useCreatePost
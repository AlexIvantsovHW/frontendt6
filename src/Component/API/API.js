import axios from "axios";
/* const baseUrl='http://localhost:3001/users' */
const baseUrl='https://t6-cuzc.onrender.com/users'

/* const bUrl='http://localhost:3001/create' */
const bUrl='https://t6-cuzc.onrender.com/create'

const API = {
  getMessage(messageAC) {
  axios
      .get(baseUrl)
      .then(response=>response.data)
      .then((data)=>{messageAC({data})}); },
 
      getForm(fData) {
        debugger;
    axios({
      method: "post",
      url: bUrl,
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
    
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response.response.data);
      })
    console.log("Form submit data", fData);

  },
};

export default API;
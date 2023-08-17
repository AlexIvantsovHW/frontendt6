import axios from "axios";
/* const baseUrl='http://localhost:3001/users' */
const baseUrl='https://t6-cuzc.onrender.com/users'
const API = {
  getMessage(messageAC) {
    const url=baseUrl;
  axios
      .get(url).then(response=>response.data)
      .then((data)=>{messageAC({data})}); },
  getForm(fData) {
    axios({
      method: "post",
      url: "http://localhost/chat/src/Component/Window/form.php",
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
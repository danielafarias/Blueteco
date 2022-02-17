import axios from "axios";

axios.defaults.baseURL = 'https://blueteco-api.herokuapp.com/';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

export const getAuth = async () => {
  const response = await axios({
    method: "get",
    url: "/auth",
    // headers: {
    //   "Content-Type": "application/json",
    // },
  }).catch(function () {
    return 'error'
  });

  return response;
};

export const postUser = async (data) => {
  const response = await axios({
    method: "post",
    url: "/user",
    data: {
      data
    }
    // headers: {
    //   "Content-Type": "application/json",
    // },
  }).catch(function () {
    return 'error'
  });

  return response;
};
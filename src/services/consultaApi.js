import axios from "axios";
import { setHeader } from "./AuthJwt";
let urlApi = "/api/v1/";
let urlApiDocker = "http://192.168.0.75:4000/api/v1/";
let urlAuthDocker = "http://192.168.0.75:4000/";

// CONSULTAS DATOS

setHeader();

const authFacebook = (access_token) => {
  return axios({
    url: `${urlAuthDocker}auth/facebook`,
    method: "POST",
    data: {
      access_token,
    },
  });
};
const disLike = (id) => {
  const url = `${urlApiDocker}like/${id}`;
  return axios.delete(url);
};

const getPostFollows = () => {
  const option = {
    url: `${urlApiDocker}post/feed/`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return axios(option);
};

const like = (id) => {
  return axios.post(`${urlApiDocker}like`, {
    data: {
      post: id,
    },
  });
};

const addComment = (idPost, comment) => {
  return axios.post(`${urlApiDocker}comment`, {
    post: idPost,
    content: comment,
  });
};

// CONSULTA LOGIN

const signIn = (data) => {
  const { userName, password } = data;
  const option = {
    //Datos consulta
    url: `${urlAuthDocker}auth/signin`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: {
      userName,
      password,
    },
  };

  return axios(option);
};

const signup = (data) => {
  return axios.post(`${urlAuthDocker}auth/signup`, {
    ...data,
  });
};

const getUser = (id) => {
  const url = `${urlApiDocker}api/v1/user/${id}`;
  return axios.get(url);
};

const getPost = (id) => {
  console.log(id);
  let url = `${urlApiDocker}post/${id}`;

  return axios.get(url);
};

const getUserProfile = (userName) => {
  return axios.get(`${urlApiDocker}user/username/${userName}`);
};

const setFollow = (idFollow) => {
  let url = `${urlApiDocker}follow`;
  return axios.post(url, {
    follow: idFollow,
  });
};

const unSetFollow = (idFollow) => {
  let url = `${urlApiDocker}follow`;
  return axios.delete(url, {
    data: {
      follow: idFollow,
    },
  });
};

const editProfile = (data) => {
  let url = `${urlApiDocker}user`;
  return axios({
    method: "PATCH",
    url,
    data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getAllPosts = () => {
  let url = `${urlApiDocker}post`;

  return axios({
    method: "GET",
    url,
  });
};

const addPost = (data) => {
  let url = `${urlApiDocker}post`;
  return axios({
    method: "POST",
    url,
    data,
  });
};

const deletePost = (idPost) => {
  let url = `${urlApiDocker}post`;

  return axios({
    method: "DELETE",
    url,
    data: {
      idPost,
    },
  });
};
const search = (userName) => {
  let url = `${urlApiDocker}user/search/${userName}`;
  return axios(url);
};

const getDataUserLogged = () => {
  let url = `${urlApiDocker}user`;
  return axios(url);
};

export default {
  getDataUserLogged,
  addPost,
  disLike,
  getPostFollows,
  like,
  addComment,
  signIn,
  search,
  signup,
  getUser,
  getPost,
  getUserProfile,
  setFollow,
  unSetFollow,
  editProfile,
  getAllPosts,
  deletePost,
  authFacebook,
};

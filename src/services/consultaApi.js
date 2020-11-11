import axios from "axios";
import { setHeader } from "./AuthJwt";

let prodUrl= ""

if (process.env.NODE_ENV === 'development') {
  prodUrl="http://localhost:4000/"
}
if (process.env.NODE_ENV === 'production'){
  prodUrl = "https://lyts-backend.herokuapp.com/"
}


// CONSULTAS DATOS

setHeader();

const authFacebook = (access_token) => {
  return axios({
    url: `${prodUrl}auth/facebook`,
    method: "POST",
    data: {
      access_token,
    },
  });
};
const disLike = (id) => {
  const url = `${prodUrl}api/v1/like/${id}`;
  return axios.delete(url);
};

const getPostFollows = () => {
  const option = {
    url: `${prodUrl}api/v1/post/feed/`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return axios(option);
};

const like = (id) => {
  return axios.post(`${prodUrl}api/v1/like`, {
    data: {
      post: id,
    },
  });
};

const addComment = (idPost, comment) => {
  return axios.post(`${prodUrl}api/v1/comment`, {
    post: idPost,
    content: comment,
  });
};

// CONSULTA LOGIN

const signIn = (data) => {
  const { userName, password } = data;
  const option = {
    //Datos consulta
    url: `${prodUrl}auth/signin`,
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
  return axios.post(`${prodUrl}auth/signup`, {
    ...data,
  });
};

const getUser = (id) => {
  const url = `${prodUrl}api/v1/user/${id}`;
  return axios.get(url);
};

const getPost = (id) => {
  let url = `${prodUrl}api/v1/post/${id}`;

  return axios.get(url);
};

const getUserProfile = (userName) => {
  return axios.get(`${prodUrl}api/v1/user/username/${userName}`);
};

const setFollow = (idFollow) => {
  let url = `${prodUrl}api/v1/follow`;
  return axios.post(url, {
    follow: idFollow,
  });
};

const unSetFollow = (idFollow) => {
  let url = `${prodUrl}api/v1/follow`;
  return axios.delete(url, {
    data: {
      follow: idFollow,
    },
  });
};

const editProfile = (data) => {
  let url = `${prodUrl}api/v1/user`;
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
  let url = `${prodUrl}api/v1/post`;

  return axios({
    method: "GET",
    url,
  });
};

const addPost = (data) => {
  let url = `${prodUrl}api/v1/post`;
  return axios({
    method: "POST",
    url,
    data,
  });
};

const deletePost = (idPost) => {
  let url = `${prodUrl}api/v1/post`;

  return axios({
    method: "DELETE",
    url,
    data: {
      idPost,
    },
  });
};
const search = (userName) => {
  let url = `${prodUrl}api/v1/user/search/${userName}`;
  return axios(url);
};

const getDataUserLogged = () => {
  let url = `${prodUrl}api/v1/user`;
  return axios(url);
};

const userToFollow = () => {
  let url = `${prodUrl}api/v1/user/tofollow`
  return axios(url)
}

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
  userToFollow
};

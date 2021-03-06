import axios from "axios";
import { setHeader } from "./AuthJwt";

let prodUrl = "";

if (process.env.NODE_ENV === "development") {
  prodUrl = "http://localhost:4000/";
}
if (process.env.NODE_ENV === "production") {
  prodUrl = "https://lyts-backend.herokuapp.com/";
}

// CONSULTAS DATOS

setHeader();

const disLike = (id) => {
  const url = `${prodUrl}api/v1/post/like/${id}`;
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
  return axios.post(`${prodUrl}api/v1/post/like/${id}`, {
    data: {
      post: id,
    },
  });
};

const addComment = (idPost, comment, username, img) => {
  return axios.post(`${prodUrl}api/v1/post/comment/${idPost}`, {
    content: comment,
    username,
    img,
  });
};
const deleteComment = (idPost, idComment) => {
  return axios.delete(`${prodUrl}api/v1/post/comment/${idPost}`, {
    idComment: idComment,
  });
};

// CONSULTA LOGIN

const signIn = (data) => {
  const { username, password } = data;
  const option = {
    //Datos consulta
    url: `${prodUrl}auth/signin`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: {
      username,
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
  return axios.get(`${prodUrl}api/v1/user/${userName}`);
};

const setFollow = (idFollow) => {
  let url = `${prodUrl}api/v1/user/follow/${idFollow}`;
  return axios.post(url);
};

const unSetFollow = (idFollow) => {
  let url = `${prodUrl}api/v1/user/follow/${idFollow}`;
  return axios.delete(url);
};

const editProfile = (data) => {
  let url = `${prodUrl}api/v1/user`;
  return axios({
    method: "PUT",
    url,
    data,
    headers: {
      "Content-Type": "application/json",
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
  let url = `${prodUrl}api/v1/post/${idPost}`;

  return axios({
    method: "DELETE",
    url,
  });
};
const search = (userName) => {
  let url = `${prodUrl}api/v1/user/search/${userName}`;
  return axios(url);
};

const getDataUserLogged = () => {
  let url = `${prodUrl}api/v1/user/logged`;
  return axios(url);
};

const userToFollow = () => {
  let url = `${prodUrl}api/v1/user/tofollow`;
  return axios(url);
};
const getFeed = () => {
  let url = `${prodUrl}api/v1/user/feed`;

  return axios(url);
};

const signGoogle = () => {
  let url = `${prodUrl}auth/google`;
  // let url = "/auth/google";
  return axios(url, {
    withCredentials: true,
  });
};
const getExplorer = () => {
  let url = `${prodUrl}api/v1/user/explorer`;
  return axios(url);
};

export default {
  getFeed,
  getExplorer,
  getDataUserLogged,
  addPost,
  disLike,
  signGoogle,
  getPostFollows,
  like,
  addComment,
  deleteComment,
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
  userToFollow,
};

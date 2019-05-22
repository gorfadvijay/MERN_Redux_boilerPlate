import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export const fetchPosts = () => dispatch => {
  axios
    .get("/api/posts")
    .then(res => res.data)
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const addPost = post => dispatch => {
  axios
    .post("/api/posts", post)
    .then(res => res.data)
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

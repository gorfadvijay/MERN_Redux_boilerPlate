import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  posts: [],
  post: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        post: action.payload
      };
    default:
      return state;
  }
}

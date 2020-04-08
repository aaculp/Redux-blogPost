import jsonPlaceholder from "../apis/jsonPlaceholder";
// with Redux Thunk we can MANUALLY dispatch an Action at any time.
// same function as commented out below just cleaner.
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

// export const fetchPosts = () => {
//   return async dispatch => {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: 'FETCH_POST', payload: response })
//   };
// };

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

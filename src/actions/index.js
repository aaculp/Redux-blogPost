import jsonPlaceholder from "../apis/jsonPlaceholder";

// same function as commented out below just cleaner.
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response });
};

// with Redux Thunk we can MANUALLY dispatch an Action at any time.

// export const fetchPosts = () => {
//   return async dispatch => {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: 'FETCH_POST', payload: response })
//   };
// };

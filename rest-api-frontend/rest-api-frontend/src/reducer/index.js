const initialState = [];

const listReducer = (state = initialState, action) => {
  if (action.type === "GET_LIST") {
    return action.payload;
  }
  return state;
};
export default listReducer;

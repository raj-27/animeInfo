const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_5":
      return state + 5;
    case "DECREMENT_5":
      return state - 5;
    case "EMPTY":
      return state*0;
    default:
      return state;
  }
};
export default counterReducer;

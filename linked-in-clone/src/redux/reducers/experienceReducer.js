const initialState = {
  expList: [],
  currentExp: {},
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_EXPERIENCES":
      console.log(action.payload);
      return {
        ...state,
        expList: action.payload,
      };

    default:
      return state;
  }
};

export default experiencesReducer;

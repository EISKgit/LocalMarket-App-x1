



export const ApiReducer = (state=[], action) => {
      switch (action.type) {
    case "GET_DATA":
      // return console.log("case 1 got it" + JSON.stringify(action.payload) );
      // return console.log(JSON.stringify(state + action.payload))
      return JSON.stringify(state + action.payload);
    default:
      return state;
  }
};

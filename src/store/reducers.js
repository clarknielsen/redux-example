// the initial state/data of our app
const initialState = {
  articles: ["hello world"]
};

// reducer function that will create a copy of the current state and then add whatever we've specified to it, based on the action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        // use spread (...) to keep original properties
        ...state, 
        articles: [...state.articles, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
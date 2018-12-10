// action function that will send new data to our reducer
// this function will be called from our react component
export const addArticle = (article) => {
  return { 
    type: "ADD_ARTICLE", 
    payload: article 
  };
};
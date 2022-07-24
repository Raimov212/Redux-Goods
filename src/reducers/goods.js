const goods = (state = [], action) => {
  switch (action.type) {
    case "ADD_GOODS":
      console.log("add goods");
      console.log(state);
      return [
        ...state,
        { id: action.id, title: action.title, img: action.img },
      ];
    default:
      return state;
  }
};
export default goods;

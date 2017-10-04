// REDUCER takes in 2 things:
// 1. the action( info about what happened)
//2. copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      console.log("incrementing likes!!");
      const index = action.index;
    //return the updated state      
      return [
        ...state.slice(0, index), //before the one we are updating (referencing to the old one)
        { ...state[index], likes: state[index].likes + 1 }, //new number
        ...state.slice(index + 1) //after the one we are updating (referencing to the old one)
      ];

    default:
      return state;
  }
}

export default posts;

// Reducer does the editing of the state

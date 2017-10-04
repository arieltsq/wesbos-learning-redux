import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

import Main from "./Main";

// Acessing the values of the store map it to the current state. 
// thus allowing the new data to be presented 
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}
//immit to the store, to have a dispatch function
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
} 

//subscribe
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
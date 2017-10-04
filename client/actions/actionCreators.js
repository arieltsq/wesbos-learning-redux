// increment the likes
// Actions are like objects that have 2 things:
//1.  Type (muts be in CAPS)
//2.  Any additional payload (In this example: Index)
// try to have as little information as possible

export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index
  };
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  };
}
//remove comment
export function removeComment(postId, index) {
  return {
    type: "REMOVE_COMMENT",
    postId,
    index
  };
}

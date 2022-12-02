const Node = (inData, inLeft, inRight) => {
  let data = inData; // the stored data
  let left = inLeft; // left children
  let right = inRight; // the right children

  return {
    data,
    left,
    right,
  };
};
export default Node;

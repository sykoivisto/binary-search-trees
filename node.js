const Node = (inData, inLeft, inRight) => {
  let data = inData; // the stored data
  let left = inLeft; // left children
  let right = inRight; // the right children

  return {
    get data() {
      return data;
    },
    get left() {
      return left;
    },
    get right() {
      return right;
    },
    set data(input) {
      return (data = input);
    },
    set left(input) {
      return (left = input);
    },
    set right(input) {
      return (right = input);
    },
  };
};
export default Node;

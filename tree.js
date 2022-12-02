import Node from "./node.js";

const Tree = (array) => {
  let root = null; // root of the tree

  const buildTree = (array) => {
    array.sort();

    if (array.length < 2) {
      let root = Node(array[0], null, null);
      return root;
    }

    let mid = Math.floor(array.length / 2);

    let left = Tree(array.slice(0, mid)).root;
    let right = Tree(array.slice(mid + 1)).root;

    let root = Node(array[mid], left, right);

    return root;
  };

  root = buildTree(array);

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  return {
    prettyPrint,
    root,
  };
};

export default Tree;

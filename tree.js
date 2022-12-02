import Node from "./node.js";

const Tree = (array) => {
  let root = null; // root of the tree

  const buildTree = (array) => {
    // use spread on a set to get rid of duplicates
    // sort the array
    array = [...new Set(array)].sort((a, b) => {
      return a - b;
    });

    if (array.length < 2) {
      let root = Node(array[0], null, null);
      return root;
    }

    let mid = Math.floor(array.length / 2);

    let left = buildTree(array.slice(0, mid));
    let right = buildTree(array.slice(mid + 1));

    let root = Node(array[mid], left, right);

    return root;
  };

  root = buildTree(array);

  const insert = (value, currentNode = root) => {
    if (currentNode === null) return Node(value, null, null)
    if (currentNode.data === value) return;

    if (currentNode.data < value) {
      currentNode.right = insert(value, currentNode.right);
    } else {
      currentNode.left = insert(value, currentNode.left);
    }
    return currentNode;
  };


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
    root,
    prettyPrint,
    insert,
  };
};

export default Tree;

import Node from './node.js';

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

  // set the root of the tree.
  // this calls the actual building of the tree.
  root = buildTree(array);

  // navigates the tree from the root until finding an appropriate place at the bottom
  // inserts a new node here.
  const insert = (value, currentNode = root) => {
    if (currentNode === null) return Node(value, null, null);
    if (currentNode.data === value) return;

    if (currentNode.data < value) {
      currentNode.right = insert(value, currentNode.right);
    } else {
      currentNode.left = insert(value, currentNode.left);
    }
    return currentNode;
  };

  // accepts any value and returns the node with this value
  const find = (value, currentNode = root) => {
    if (currentNode === null) return null;
    if (currentNode.data === value) {
      return currentNode;
    }

    if (currentNode.data < value) {
      return find(value, currentNode.right);
    } else {
      return find(value, currentNode.left);
    }
  };

  const levelOrder = (callback) => {
    const queue = [root];
    const valueArr = [];

    // while theres things in the queue
    while (queue.length > 0) {
      // next in queue
      const currentNode = queue.shift();

      // provide the node to the callback
      // if no callback, push to the array of values
      if (callback) {
        callback(currentNode);
      } else {
        if (currentNode.data) valueArr.push(currentNode.data);
      }

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }

    return valueArr;
  };

  const inorder = (currentNode = root, list = []) => {
    if (currentNode === null) return;

    if (currentNode.left) inorder(currentNode.left, list);
    if (currentNode.data) list.push(currentNode.data);
    if (currentNode.right) inorder(currentNode.right, list);

    if (list.length > 0) return list;
  };

  const preorder = (currentNode = root, list = []) => {
    if (currentNode === null) return;

    if (currentNode.data) list.push(currentNode.data);
    if (currentNode.left) preorder(currentNode.left, list);
    if (currentNode.right) preorder(currentNode.right, list);

    if (list.length > 0) return list;
  };

  const postorder = (currentNode = root, list = []) => {
    if (currentNode === null) return;

    if (currentNode.left) postorder(currentNode.left, list);
    if (currentNode.right) postorder(currentNode.right, list);
    if (currentNode.data) list.push(currentNode.data);

    if (list.length > 0) return list;
  };

  const prettyPrint = (node = root, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  return {
    root,
    prettyPrint,
    insert,
    find,
    levelOrder,
    inorder,
    preorder,
    postorder,
  };
};

export default Tree;

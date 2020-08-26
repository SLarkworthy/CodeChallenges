class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };
  
  
  const traverse = function(root) {
    result = [];
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
      let levelSize = queue.length;
      let levelArr = [];
      for (let i=0; i < levelSize; i++){
        let node = queue.shift();
        levelArr.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      result.push(levelArr);
    }
    return result;
  };
  
  
  
  var root = new TreeNode(12);
  root.left = new TreeNode(7);
  root.right = new TreeNode(0);
  root.left.left = new TreeNode(9);
  root.right.left = new TreeNode(10);
  root.right.right = new TreeNode(5);
  console.log(`Level order traversal: ${traverse(root)}`);
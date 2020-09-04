//Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. 
//Find the total sum of all the numbers represented by all paths.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
};

const find_sum_of_path_numbers = function(root) {
    let sum = 0;
  
    function findPathNum(node, current){
      if (node === null) return;
      current = current * 10 + node.value; 
      if (!node.left && !node.right) return sum += current;
      if (node.left) findPathNum(node.left, current); 
      if (node.right) findPathNum(node.right, current);
    }
  
    findPathNum(root, 0)
  
    return sum;
  };

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)

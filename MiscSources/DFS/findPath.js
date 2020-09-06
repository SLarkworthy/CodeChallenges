//Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

class TreeNode {

    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null; 
    }
  };

const find_path = function(root, sequence) {
    if (!root) return false;
    if (root.value !== sequence[0]) return false;
    if (!root.right && !root.left && sequence.length === 1) return true;
  
    return find_path(root.left, sequence.slice(1)) || find_path(root.right, sequence.slice(1))
  };
  
  
  
  var root = new TreeNode(1)
  root.left = new TreeNode(0)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(1)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(5)
  
  console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
  console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)
  
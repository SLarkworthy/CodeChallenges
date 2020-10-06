// My solution to She's coding problems for 10/7/20

//Maximum Depth of N-ary Tree
var maxDepth = function(root) {
    if (!root) return 0;
    return recursiveDepth(root, 1);
};

function recursiveDepth(node, depth) {
    if (node.children.length === 0) return depth;
    
    let depthArray = node.children.map(child => recursiveDepth(child, depth + 1))
    return Math.max(...depthArray);
}

// Sum of Left Leaves
var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    return sumOfLeftLeavesR(root.right, false) + sumOfLeftLeavesR(root.left, true);
};

function sumOfLeftLeavesR(node, isLeft){
    if (!node) return 0;
    if (!node.left && !node.right) {
        return isLeft ? node.val : 0;
    }
    return sumOfLeftLeavesR(node.right, false) + sumOfLeftLeavesR(node.left, true);
}
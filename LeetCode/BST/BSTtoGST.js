var bstToGst = function(root) {
    let currentSum = 0;
    traverseBackwardsInOrder = (node) => {
        if (node.right){
            traverseBackwardsInOrder(node.right);
        }
        currentSum += node.val;
        node.val = currentSum;
        if (node.left){
            traverseBackwardsInOrder(node.left);
        }
    }
    traverseBackwardsInOrder(root);
    return root;
};

//brute force would involve searching each array for values smaller than a number and adding them to a total
//One could also sort the array to speed that up, but it's still nlogn.
//to do this well we have to traverse the tree depth first in order
//If we traverse backwards, we can just add the new value to an accumulator and replace it in the tree.
//rightmost child -> parent -> leftmost child
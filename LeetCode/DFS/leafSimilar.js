//This had good time complexity but bad space! 
//I could lesson the space by using one array
//and having the second traversal remove items from that array

var leafSimilar = function(root1, root2) {
    arr1 = [];
    arr2 = [];
    function traverse(array, node){
       if (!node.left && !node.right) {
            array.push(node.val)
        } else {
            if(node.left) traverse(array, node.left);
            if(node.right) traverse(array, node.right);
        }
    }
    traverse(arr1, root1);
    traverse(arr2, root2);
    console.log(arr1, arr2);
    if (arr1.length !== arr2.length) return false;
    for (let i=0; i<arr1.length; i++){
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};
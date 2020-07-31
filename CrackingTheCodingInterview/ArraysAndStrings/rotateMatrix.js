//Rotate Matrix
//Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees.
//Can you do this in place?

//Hmm..I may need some hints for this.
//pseudocode:
//x = [[a, b, c],
// [d, e, f], 
// [g, h, i]]
// would become
//x90 = [[g, d, a],
// [h, e, b],
// [i, f, c]]
//x90 = [[x[2][0], x[1][0], x[0][0]],
// [x[2][1], x[1][1], x[0][1]],
// [x[2][2], x[1][2], x[0][2]]]

//here is my brute force attempt, not in place. O(n^2) time and space complexity, I believe.

function rotateMatrix(matrix){
    let newMatrix = [];
    for (i = matrix.length - 1; i >= 0; i--){
      let row = [];
      for (j = matrix.length - 1; j >= 0; j--) {
        row.push(matrix[j][matrix.length - 1 - i])
      }
      newMatrix.push(row);
    }
    return newMatrix;
  }
  
  var testMatrix = [
  [1, 2, 3, 4],
  [0, 1, 2, 3],
  [0, 0, 1, 2],
  [1, 0, 0, 1]
  ];
  
  console.log(rotateMatrix(testMatrix));
  
  //in order to do it IN PLACE we would have to do a series of swaps

 //Here is a solution from the js solution github:
 
 var rotateMatrixSolution = function(matrix) {
    var edge = matrix.length - 1;
  
    var movePixels = function(row, col) {
      // starts at m[row][col]
      // moves to m[col][edge - row]
      var fromRow;
      var fromCol;
      var fromPixel;
  
      // first transformation
      var toRow = row; // 0
      var toCol = col; // 1
      var toPixel = matrix[row][col];
  
      // Do rotational transformation 4 times
      for (var i = 0; i < 4; i++) {
        fromRow = toRow;
        fromCol = toCol;
        toRow = fromCol;
        toCol = edge - fromRow;
  
        fromPixel = toPixel;
        toPixel = matrix[toRow][toCol];
        matrix[toRow][toCol] = fromPixel;
      }
    };
  
    for (var i = 0; i < matrix.length / 2; i++) {
      for (var j = i; j < edge - i; j++) {
        movePixels(i, j);
      }
    }
  };

//translated from java to javascript, here is the book solution which I really like:
function rotateBookSolution(matrix){
    let n = matrix.length;
    for (let row = 0; row < n/2; row++){
        let first = row;
        let last = n - 1 - row;
        for (let i = first; i < last; i++){
            let offset = i - first;
            let top = matrix[first][i] //save in a temp variable to allow swapping
            matrix[first][i] = matrix[last-offset][i];
            matrix[last-offset][first] = matrix[last][last-offset];
            matrix[last][last-offset] = matrix[i][last];
            matrix[i][last] = top;
        }
    }
    return matrix;
}
  
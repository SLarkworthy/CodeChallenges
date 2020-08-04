//Zero Matrix
//Write an alogrithm such that if an element in an M x N matrix is 0, its entire row and column are set to 0.

//An immediate solution other than brute force does not come to mind yet, so here is pseudocode for the brute force:
//Iterate through every element in the matrix. If it's zero, change the row and column values to zeros using iteration.
//NOTE: the change to zeros must come at the VERY END
//Otherwise whenever we changed a row and column to zeros, unchecked elements would cause another full row to become zeros.
//If this happened in the first element, the entire matrix would just fill itself with zeros. 
//Save the zero elements in an array. 

function zeroMatrix(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let zeroArray = [];
  
    for (let i = 0; i < rows; i++){
      for (let j = 0; j < columns; j++){
        if (!matrix[i][j]){
          zeroArray.push([i, j])
        }
      }
    }
    for (let item of zeroArray){
      matrix[item[0]] = new Array(columns).fill(0);
      let j = item[1];
      for (let i = 0; i < rows; i++){
        matrix[i][j] = 0;
      }
    }
    return matrix;
  }
  
  let matrix = [
    [1, 2, 3],
    [0, 3, 5]
  ]
  //=> [[0, 2, 3], [0,0,0]]
  
  zeroMatrix(matrix);

  //The book solution optomizes this a lot!
  //They just keep track of each row and column that will eventually be replaced by zeroes
  //instead of keeping track of the exact location of the zero element like I did.
  //They also have a cool solution with O(1) space that keeps track of the columns and rows to change
  //using the first row and column of the matrix.

  //Here is the first book solution, translated from java to javascript:
  function zeroMatrixSolution(matrix) {
    let row = new Array(matrix.length).fill(false);
    let column = new Array(matrix[0].length).fill(false);
    let zeroArray = [];
  
    for (let i = 0; i < matrix.length; i++){
      for (let j = 0; j < matrix[0].length; j++){
        if (matrix[i][j] === 0){
          row[i] = true;
          column[j] = true;
        }
      }
    }
    const nullifyRow = (matrix, row) => {
       for (let j = 0; j < matrix[0].length; j++){
         matrix[row][j] = 0;
       }
    }
    const nullifyColumn = (matrix, col) => {
       for (let i = 0; i < matrix.length; i++){
         matrix[i][col] = 0;
       }
    }

    for (let i = 0; i < matrix.length; i++){
      if (row[i]) nullifyRow(matrix, i);
    }
    for (let j = 0; j < matrix[0].length; j++){
      if (column[j]) nullifyColumn(matrix, j);
    }

    return matrix;
  }
  
  let matrix = [
    [1, 2, 3],
    [0, 3, 5]
  ]
  //=> [[0, 2, 3], [0,0,0]]
  
  zeroMatrixSolution(matrix);
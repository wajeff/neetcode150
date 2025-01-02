class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
      let start = 0;
      let end = matrix.length-1;

      while(start<=end){
          let middle = Math.floor((start+end)/2);
          if(matrix[middle].includes(target)){
              return true;
          }
          else if(matrix[middle][matrix.length-1]>target){
              end = middle-1;
          }
          else{
              start = middle+1
          }

      }
      return false;
  }
}

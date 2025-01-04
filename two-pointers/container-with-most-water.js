class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
      /*In this question, we are basically finding the maximum area between two indices. The width is the difference
      of their indexes. The height is the remainder of the two bars. */

      /*The key to the algo is that the two pointers must keep moving closer tgt from
      the outside inwards. And we must always try to have both bars be higher. Thereby,
      we compare them and move inwards the pointer with the smaller value. If values
      are equal, we can move either. */

      let left = 0;
      let right = heights.length-1;
      let res = 0

      while(left<right){
          let area =  Math.min(heights[left],heights[right]) * (right-left);
          res = Math.max( res , area )

          if(heights[left]<heights[right]){
              left++
          }
          else{
              right--
          }
          
      };
      return res
  }
}

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
      let left = 0;
      let right = nums.length-1;

      while(left <= right){
          let middle = Math.floor((left+right)/2)
          if(nums[middle] === target){
              return middle
          }
          else if(nums[middle]<target){
              left = middle+1
          }
          else if(nums[middle]>target){
              right = middle-1
          }
      }
      return -1
  };
}

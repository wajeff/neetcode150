class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
       let currentValue = 1;
let result = [];
for(let i = 0 ; i < nums.length ; i++){
  result.push(currentValue);
  currentValue *= nums[i]
  
}
currentValue = 1;
for(let i = nums.length-1; i >-1 ; i--){
  result[i]=(currentValue*result[i]);
  currentValue *= nums[i]; 
  
};
return(result);
  }
}

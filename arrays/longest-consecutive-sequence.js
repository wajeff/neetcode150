class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
      const numsSet = new Set(nums)
      let currentLength = 1;
      let max = 0;
      for ( let element of numsSet){
          if(!numsSet.has(element-1)){
              let startValue = element;
              let currentValue = element+1
              while(numsSet.has(currentValue)){
                  currentLength++
                  currentValue++
              }
              max = Math.max(currentLength,max)
              currentLength = 1;
          }
      }
      return max
  };
}

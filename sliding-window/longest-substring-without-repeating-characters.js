class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
      let left = 0;
      let right = 0;
      let sSet = new Set();
      let res = 0;
      while(right<s.length){
          while(sSet.has(s[right])){
              sSet.delete(s[left]);
              left++;
          };
          sSet.add(s[right]);
          right++;
          res = Math.max(res,sSet.size);
      };
      return res;
  };
};

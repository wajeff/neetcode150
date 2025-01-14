class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
      let left = 0;

      let res = k;
      let mostCommon = 0;
      let sMap = new Map();

      for(let right = 0 ; right < s.length; right++){
          if(sMap.has(s[right])){
              sMap.set(s[right], sMap.get(s[right])+1)
          } 
          else{
              sMap.set(s[right], 1)
          }
          mostCommon = Math.max(mostCommon, sMap.get(s[right]))
         
          if(right-left+1 - mostCommon>k){
              sMap.set(s[left],sMap.get(s[left])-1)
              left++
          }
          res = Math.max(res, right-left+1)
      }
      
      return res;
  }
}
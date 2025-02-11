class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
      if(s.length!=t.length){
          return false;
      }
      let sMap = new Map();
      let tMap = new Map();

      for(let i = 0; i<s.length; i++){
          if(!(sMap.has(s[i]))){
              sMap.set(s[i],1);
          }
          else if(sMap.has(s[i])){
              sMap.set(s[i], sMap.get(s[i])+1);
          }
          if(!(tMap.has(t[i]))){
              tMap.set(t[i],1)
          }
          else if(tMap.has(t[i])){
              tMap.set(t[i], tMap.get(t[i])+1)
          };
      };
      for (let [key, value] of sMap){
          if(!(tMap.get(key)===value)){
              return false;
          };
      };
      return true;
  };
};
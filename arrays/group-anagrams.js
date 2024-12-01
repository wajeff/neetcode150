class Solution {
  groupAnagrams(strs) {
      let strsMap = new Map();
      for (let word of strs){
          let sortedWord = word.split('').sort().join('');
          if (!strsMap.has(sortedWord)){
              strsMap.set(sortedWord,[])
          };
          strsMap.get(sortedWord).push(word)
      }
      return Array.from(strsMap.values())
  }
 
}
groupAnagrams(["act","pots","tops","cat","stop","hat"])
//[["hat"],["act", "cat"],["stop", "pots", "tops"]]
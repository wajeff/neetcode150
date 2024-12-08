const lengthOfLongestSubstring = function (s) {
  let start = 0;
  let sMap = new Map();
  let max = 0;
  for(let i = start; i < s.length ; i++){

    if(sMap.has(s[i])){
      sMap.set(i,s[i])
      start = i
      console.log(start)
    }
    else{
      sMap.set(i,s[i])
      max = Math.max(sMap.size,max)
    }
    console.log(sMap)
  };
  return max
};
lengthOfLongestSubstring('pwwkew')
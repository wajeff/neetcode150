class Solution {
  topKFrequent(nums, k) {
      let numsMap = new Map();
      let result = [];
      for(let num of nums){
          if(numsMap.has(num)){
              numsMap.set(num, numsMap.get(num)+1);
          }
          else{
              numsMap.set(num,1);
          };
      };
      numsMap = new Map([...numsMap.entries()].sort((a,b)=>b[1]-a[1]));
      let iterator = numsMap.entries()
      
      for(let i = 0; i < k; i++){
          result.push(iterator.next().value[0])
      };
      return result;
  };
};

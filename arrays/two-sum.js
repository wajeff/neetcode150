/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsMap = new Map;
      for (let element of nums){
          if(numsMap.has(element)){
              numsMap.set(element, numsMap.get(element)+1);
          }
          else{
              numsMap.set(element,1);
          };
      };
      for( let [key,value] of numsMap){
          let valueToFind = target-key;
          if(numsMap.has(valueToFind)){
              if(valueToFind === key&&value>1){
                  return [nums.indexOf(key),nums.indexOf(key,nums.indexOf(key)+1)];
              }
              else if(valueToFind === key && value==1){
                  continue;
              };
              return [nums.indexOf(key),nums.indexOf(valueToFind)]
          };
          
      };
  };
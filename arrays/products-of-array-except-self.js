const productExceptSelf = function(nums) {
  let result = []
  let originalNums = [...nums]
  for(let i = 0; i < nums.length ; i++){
    currentArray = [...nums]
    delete currentArray[i]
    result.push(currentArray.reduce((a,b)=>b*a,1))

  }
  return result

}
productExceptSelf([-1,0,1,2,3])
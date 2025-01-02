class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let numbersHash = new Map();
        for(let i = 0; i < numbers.length ; i++){
            if(numbersHash.has(numbers[i])){
                let array = numbersHash.get(numbers[i]).slice()
                array.push(i+1)
                numbersHash.set(numbers[i],array)
            }
            else{
                numbersHash.set(numbers[i],[i+1])
            }
            
            
        }
        for(const [key,value] of numbersHash){
            let tempTarget = target-key
            if(numbersHash.has(tempTarget)){
                let array = numbersHash.get(tempTarget).slice()
                if(array[array.length-1]>value){
                    
                    return [value[0], array[array.length-1]]
                }
            }            
        }
    }
}
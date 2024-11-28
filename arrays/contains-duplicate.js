class Solution {
    hasDuplicate(nums) {
        let numsMap = new Map();
        for (let element of nums){
            if(!numsMap.has(element)){
                numsMap.set(element, 1)
            }
            else{
                return true;
            }
        };
        return false;
    };
};

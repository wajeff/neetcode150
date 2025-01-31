class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        
        while(left < right){
            let middle = Math.floor((left+right)/2);
            if(nums[right]<nums[middle]){
                left = middle+1
            }
            else{
                right = middle
            }
        };
        return nums[left]
    };
};

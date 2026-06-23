class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicate = [...new Set(nums)]
        if(duplicate.length < nums.length){
            return true
        }else if(duplicate.length == nums.length) {
            return false;
        }
    }
}

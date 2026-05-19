class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map  = new Map()
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }
        return Array.from(map.entries()).sort((a,b) => b[1] - a[1]).slice(0,k).map(en => en[0]);
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagram = {}
        for(let str of  strs){
            const sorted = str.split("").sort().join("")
            if(!anagram[sorted]){
                anagram[sorted]= []
            }
            anagram[sorted].push(str);
        }
        return Object.values(anagram)
    }
}

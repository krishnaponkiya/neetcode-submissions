class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let t_array = t.split("").sort().join();
        let s_array = s.split("").sort().join();
        console.log("t_array",t.split("").sort())
        console.log("t_array",t.split("").sort().join())
        console.log("s_array",s.split("").sort())
        console.log("s_array",s.split("").sort().join())
        return t_array == s_array;
    } 
}

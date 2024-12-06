class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const alphabetExp = new RegExp(/[^a-z0-9]/gi)
    s=s.replaceAll(alphabetExp,'').toLowerCase()

    let left = 0 
    let right = s.length-1;

    if(s.length==2){
      if(s[0]===s[1]){
        return true;
      }
      else{
        return false;
      };
    };

    while(left<=right){

      if(!(s[left]===s[right])){
        return false;
      };
      left++
      right--
    };
    return true;
  };
};


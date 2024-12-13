class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let element of s){
            if(element =='(' ||element =='['||element =='{' ){
                stack.push(element)
            }
            else{
                let lastBracket = stack.pop();
                if(element ===')'){
                    if(lastBracket !== '('){
                        return false
                    }
                }
                else if(element ===']'){
                    if(lastBracket !== '['){
                        return false
                    }
                }
                else if(element ==='}'){
                    if(lastBracket !== '{'){
                        return false
                    }
                }
            }
        };
        if(stack.length === 0){
            return true;
        }
        return false;
    };
}

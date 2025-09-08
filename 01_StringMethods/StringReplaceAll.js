

Object.defineProperty(String.prototype,"customReplaceAll",{
    value : function(wordToReplace, replacementWord){

        const inputString = this;
        const lengthOfInputString = inputString.length;
        const firstChar = wordToReplace.charAt(0);
        const lengthOfWordToReplace = wordToReplace.length;
        let replacedString = "";

        for(let i=0;i<lengthOfInputString;i++){
            let isSame = false;
            const currentChar = inputString.charAt(i);
            if(currentChar === firstChar){

                if(isExists(inputString,wordToReplace,i,lengthOfWordToReplace)){
                    replacedString += replacementWord;
                    i += lengthOfWordToReplace-1;
                    isSame = true;
                }
            } if(!isSame)replacedString += currentChar;
        }

        function isExists(inputString,wordToReplace,startIndex,lengthOfWordToReplace){
            
            let i = startIndex;
            let j = 0;
            while(i<inputString.length && j<lengthOfWordToReplace){
                const inputChar = inputString.charAt(i);
                const replacementChar = wordToReplace.charAt(j);
                if(inputChar !== replacementChar) return false;
                i++;
                j++;
            }
            return j===lengthOfWordToReplace;
        }
        return replacedString;
    }
});

console.log("hellowohellorld hello".customReplaceAll("","hi"));

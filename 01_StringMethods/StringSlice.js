

Object.defineProperty(String.prototype,"customSlice",{
    value : function(startIndex, endIndex){

        const currentValue = this;
        let slicedString  = "";
        const lengthOfInputString = currentValue.length;

        if(!endIndex) endIndex = lengthOfInputString-1;
        else{
            endIndex = endIndex > 0 ? endIndex : lengthOfInputString + endIndex - 1;
        }

        startIndex = startIndex > 0 ? startIndex : lengthOfInputString + startIndex;
        
        for(let i=startIndex;i<=endIndex;i++){
            slicedString += currentValue.charAt(i);
        }

        return slicedString;
    }
});

const inputString = "1234567";
console.log(inputString.customSlice(-6,-1));

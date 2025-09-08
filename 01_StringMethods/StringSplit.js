

Object.defineProperty(String.prototype,"customSplit",{
    value : function(separator){
        const inputString = this;
        const lengthofInputString = inputString.length;
        
        let tempArray = [];
        let tempString = "";
        for(let i=0;i<lengthofInputString;i++){
            const currentChar = inputString.charAt(i);
            if(separator === ""){
                tempArray.push(currentChar);
                continue;
            }
            if(currentChar === separator){
                tempArray.push(tempString);
                tempString = "";
            }
            else tempString += currentChar;
        }
        tempArray.push(tempString);
        return tempArray;
    }
});

const inputString = "12,34,56,7";
console.log(inputString.customSplit(""));

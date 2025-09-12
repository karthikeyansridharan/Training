

Object.defineProperty(String.prototype,"customLowercase",{
    value : function(){

        const currentValue = this;
        
        const lengthOfInputString = this.length;
        let stringInLowercase = "";
        
        for(let i=0;i<lengthOfInputString;i++){
            const character = currentValue[i]; 
            if(character < 'A' || character > 'Z') {
                stringInLowercase += character;
                continue;
            }
            const asciiValueOfCurrentChar = currentValue.charCodeAt(i) + 32;
            stringInLowercase += String.fromCharCode(asciiValueOfCurrentChar);
        }
        return stringInLowercase;
    }
});

const inputString = "ABC$D";
console.log(inputString.customLowercase());



Object.defineProperty(String.prototype,"customUppercase",{
    value : function(){

        const currentValue = this;
        
        const lengthOfInputString = this.length;
        let stringInUppercase = "";
        
        for(let i=0;i<lengthOfInputString;i++){
            const character = currentValue[i]; 
            if(character < 'a' || character > 'z') {
                stringInUppercase += character;
                continue;
            }
            const asciiValueOfCurrentChar = currentValue.charCodeAt(i) - 32;
            stringInUppercase += String.fromCharCode(asciiValueOfCurrentChar);
        }
        return stringInUppercase;
    }
});

const inputString = "AbC$D";
console.log(inputString.customUppercase());

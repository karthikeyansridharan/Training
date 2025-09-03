
function convertToUsFormat(mobileNumber){

    if(typeof(mobileNumber) !== "number"){
        console.error("Error: Input should be a number");
        return null;
    }

    mobileNumber += "";

    if(mobileNumber.length != 10){
        console.error("Error: Number should be exactly 10 digits");
        return null;
    }
    
    let usFormattedNumber = "";

    for(let i=0;i<mobileNumber.length;i++){
        switch(i){
            case 0:
                usFormattedNumber += "(";
                break;
            case 3:
                usFormattedNumber += ")";
                break;
            case 6:
                usFormattedNumber += "-";
                break;
        }
        usFormattedNumber += mobileNumber.charAt(i);
    }
    return usFormattedNumber;
}

console.log(convertToUsFormat(7708439287));

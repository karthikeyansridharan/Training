let str = "user arun";
console.log(checkSpaces(str));

function checkSpaces(str){
    let len = str.length;
    for(let i=0;i<len;i++){
        if(str.charAt(i)==" ") return true;
    }
    return false;
}
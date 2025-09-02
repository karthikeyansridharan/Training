let str = "numenticaui";
let val = 2;
stringSplit(str,val);

function stringSplit(str,val){
    let arr = [];
    let len = str.length;
    let i = 0;
    let j = val-1;
    while(i<len){
        let temp = "";
        for(let k=i;k<=j;k++){
            temp += (str.charAt(k));
        }
        arr.push(temp);
        i = j+1;
        j += val;
    }
    console.log(arr);
}
repeatString("arun",3)

function repeatString(str,cnt){
    let val = str;
    for(let i=1;i<cnt;i++){
        str += val;
    }
    console.log(str);
}
let str = "traaaainningfornewbie";

charRepeating(str);

function charRepeating(str){
    let count = 0;
    let max = 0;
    let char = '';
    let len = str.length;
    if(len==1) char = str.charAt(0);
    for(let i=1;i<len;i++){
        if(str.charAt(i)==str.charAt(i-1)) {
            count++;
            if(count>=max){
                max = count;
                char = str.charAt(i);
            }
        }
        else count=0;
    }
    console.log(char);
}

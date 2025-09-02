let dict = {
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    0 : "zero"
}


convertNumberToString(902);

function convertNumberToString(num){
    if(num==0) console.log(dict[num]);
    let str = "";
    while(num>0){
        let n = num%10;
        let temp = dict[n];
        temp += str;
        str = temp;
        num = Math.floor(num/10);
    }
    console.log(str);
}

findSum(5,5);

function findSum(val, cnt){
    let sum = 0;
    for(let i=1;i<=cnt;i++){
        sum += (val*i);
    }
    console.log(sum);
}
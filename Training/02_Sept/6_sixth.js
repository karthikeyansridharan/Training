let arr = [38,3,2,8,31];
findEvenSum(arr);

function findEvenSum(arr){
    let sum = 0;
    let len = arr.length;
    for(let i=0;i<len;i++){
        if(arr[i]%2==0) sum+=arr[i];
    }
    console.log(sum);
}
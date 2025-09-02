let arr = ["a","d",1,true,"cd",33];
let val = "string";

filterOut(arr,val);

function filterOut(arr,val){
    let len = arr.length;
    for(let i=0;i<len;i++){
        if(typeof(arr[i])==val) remove(arr,i);
    }
    if(typeof(arr[0])==val) remove(arr,0);
    console.log(arr);
}

function remove(arr,i){
    let k = i;
    let len = arr.length;
    for(let j=k+1;j<len;j++){
        arr[k] = arr[j];
        k++;
    }
    arr.pop();
}

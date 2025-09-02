let arr = [1,1,1,2,"two", "two", 3, "two"];
removeDuplicates(arr);

function removeDuplicates(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        if(!containsValue(arr[i],newArr)) newArr.push(arr[i]);
    }
    console.log(newArr);
}

function containsValue(val,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val) return true;
    }
    return false;
}
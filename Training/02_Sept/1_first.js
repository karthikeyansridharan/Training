let str = "kindness is being kind";
let key = "kind";
let str_len = str.length;
let key_len = key.length;
findNumberOfOccurance(str,key);

function findNumberOfOccurance(str,key){
    let count = 0;
    let char = key.charAt(0);

    for(let i=0;i<str_len;i++){
        if(str.charAt(i)==char){
            if(checkMatch(i)){
                count++; 
            }
        }
    }

    console.log(count);
}

function checkMatch(ind){
    let i = ind;
    let j = 0;
    while(i<str_len && j<key_len){
        if(str.charAt(i)!=key.charAt(j)){
            return false;
        }
        i++;
        j++;
    }
    if(j<key_len) return false;
    return true;
}
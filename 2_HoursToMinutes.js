
function displayError(n){
    console.error("Error: Invalid time "+ n);
    return null
}

function hoursToMinutes(timeInHours){
    const length = timeInHours.length;
    
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let counter = 1;
    let timeOfDay = "";
    
    for(let i=0;i<length;i++){
        
        if(timeInHours.charAt(i)==":"){
            counter++;
            continue;
        } 
        if(timeInHours.charAt(i)==" "){
            counter = -1;
            continue;
        } 
        switch (counter){
            case 1:
                hours = hours * 10 + parseInt(timeInHours.charAt(i));
                break;
            case 2:
                minutes = minutes * 10 + parseInt(timeInHours.charAt(i));
                break;
            case 3:
                seconds = seconds * 10 + parseInt(timeInHours.charAt(i));
                break;
            case -1:
                timeOfDay += timeInHours.charAt(i);
                break;
        }
    }

    if(counter==1) return displayError(1);
    if(hours > 24 || minutes > 60 || seconds > 60) return displayError(2);
    if(timeOfDay != "am" && timeOfDay != "pm" && timeOfDay != "") return displayError(3);

    if(timeOfDay == "am"){
        if(hours == 12) minutes += ((hours * 0) + Math.round(seconds));
        else minutes += ((hours * 60) + Math.round(seconds));
    }
    else if(timeOfDay == "pm"){
        minutes += ((hours * 60) + Math.round(seconds)) + 720;
    }
    else{
        minutes += ((hours * 60) + Math.round(seconds));
    }
    
    if(typeof minutes != "number") displayError(4);
    return minutes;
}

console.log(hoursToMinutes("12:00 am"));
function displayError(n){
    console.error("Error: Invalid input ",n);
    return ;
}

function getTime(time){
    const lengthOfTime = time.length;
    let colonCount = 0;
    let spaceCount = 0;
    let hours = 0;
    let minutes = 0;
    let timePeriod = "";
    for(let i=0;i<lengthOfTime;i++){
        if(colonCount > 1 || spaceCount > 1 || timePeriod.length > 2) return displayError(1);
        let currentChar = time.charAt(i);
        switch(currentChar){
            case ":":
                colonCount++;
                continue;
            case " ":
                spaceCount++;
                continue;
        }
        if(colonCount === 0 && spaceCount === 0) hours = hours*10 + parseInt(currentChar);
        else if(colonCount === 1 && spaceCount === 0) minutes = minutes*10 + parseInt(currentChar);
        else if(colonCount === 1 && spaceCount === 1) timePeriod += currentChar.toUpperCase();
    }

    if(typeof hours !== "number" || hours < 1 || hours > 12) return displayError(2);
    if(typeof minutes !== "number" || minutes < 0 || minutes > 59) return displayError(3);
    if(timePeriod !== "AM" && timePeriod !== "PM") return displayError(4);
    if(hours === 12 && timePeriod === "AM") hours = 0;
    
    return [hours,minutes,timePeriod];
}

function calculateTimeElapsed(startTime, endTime){
    
    if(typeof startTime !== "string" || typeof endTime !== "string") return displayError();

    const startTimeArray = getTime(startTime);
    const endTimeArray = getTime(endTime);

    if(!startTimeArray || !endTimeArray) return displayError();

    const startTimeHour = startTimeArray[0];
    const startTimeMinutes = startTimeArray[1];
    const startTimePeriod = startTimeArray[2];
    
    const endTimeHour = endTimeArray[0];
    const endTimeMinutes = endTimeArray[1];
    const endTimePeriod = endTimeArray[2];
    
    const startTimeInMinutes = (startTimePeriod==="PM") ? ((startTimeHour+12) * 60) + startTimeMinutes: startTimeHour * 60 + startTimeMinutes;
    const endTimeInMinutes = (endTimePeriod==="PM") ? ((endTimeHour+12) * 60) + endTimeMinutes: endTimeHour * 60 + endTimeMinutes;
    
    let differenceMinute = endTimeInMinutes - startTimeInMinutes;
    let differenceHour = Math.floor(differenceMinute / 60);
    differenceMinute = differenceMinute % 60; 
    let differenceBetweenHours = `${differenceHour} Hours and ${differenceMinute} Minutes`;

    if(differenceHour < 0) return displayError();
    return differenceBetweenHours;
}

console.log(calculateTimeElapsed("09:00 aM","3:12 pM"));

function displayError(){
    console.error("Error: Invalid input");
    return null;
}

function assignVehicles(vehicles,parcelArray){

    if(!Array.isArray(vehicles) || !Array.isArray(parcelArray)) return displayError();
    
    const vehicleArray = [];
    
    for(let object of vehicles){
    
        const vehicleType = object["type"];
        const vehicleCapacity = object["weightCapacity"];
    
        if(typeof vehicleType !== "string" || typeof vehicleCapacity !== "number" || vehicleCapacity <= 0) continue;
    
        vehicleType.trim().toLowerCase();
        vehicleArray.push([object["type"].trim().toLowerCase(),object["weightCapacity"]]);
    }

    vehicleArray.sort((a,b)=> b[1] - a[1]);

    const assignedVehicles = [];
    
    for(let parcels of parcelArray){

        const vehiclesNeeded = {};
        const currentLocation = parcels["location"].toLowerCase();
        let currentWeight = parcels["weight"];

        if(typeof currentLocation !== "string" || typeof currentWeight !== "number" || currentWeight<=0) continue;

        for(let vehicles of vehicleArray){
            
            if(currentWeight <= 0) break;
            
            const currentVehicle = vehicles[0];
            const currentCapacity = vehicles[1];
            let vehicleCount = Math.floor(currentWeight / currentCapacity);
            
            currentWeight = currentWeight % currentCapacity;

            if(vehicleCount > 0) {
                vehiclesNeeded[currentVehicle] = vehicleCount;
            }
        }

        if(currentWeight > 0){
            for (let i = vehicleArray.length-1; i >= 0; i++) {
                
                const currentValue = vehicleArray[i];
                
                if(currentValue[1] > currentWeight){
                    vehiclesNeeded[currentValue[0]] = vehiclesNeeded[currentValue[0]]+1 || 1; 
                    break;
                }
            }
        }

        assignedVehicles.push(vehiclesNeeded)        
    }

    return assignedVehicles;

}

const vehicles = [
  { type: 'cycle', weightCapacity: 1},
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];


const parcels = [
  { location: 'velachery', weight: "32.5" },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];

console.log(assignVehicles(vehicles,parcels));



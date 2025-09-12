
function fetchUsingThen(apiUrl){
    const url = apiUrl;
    return fetch(url)
    .then(response=>{
        
        if(response.status !== 200){
            console.error("Error fetching results");
            return null;
        }
        return response.json()
    })

    .catch(error=>{
        console.error("Error fetching results ",error);
        return null
    });
}

async function fetchUsingAsync(apiUrl){

    const url = apiUrl;
    try{
        const response = await fetch(url);
    
        if(response.status !== 200){
            console.error("Error fetching data");
            return null;
        }
        
        const result = await response.json();
        
        return result;

    } catch(err){
        console.error(err);
        return null;
    }
    
}

fetchUsingThen("https://jsonplaceholder.typicode.com/todos/1").then(data=>console.log(data));

const data = await fetchUsingAsync("https://jsonplaceholder.typicode.com/todos/1");
console.log(data);


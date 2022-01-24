let page=1;
const getMonsters=a=>{
console.log('get monsters')
}
    FETCH "http://localhost:3000/monsters"
        .then(function(response) {
        return response.json();
        }
        .then(function(data) {
        appendData(data);
    }
    POST http://localhost:3000/monsters
        headers: {
            "Content-Type": "application/json",
        Accept: "application/json"
            }
        body: 
        { name: string, age: number, description: string }

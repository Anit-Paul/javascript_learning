async function get_joke(){
    const response=await fetch('https://prod-main-api-704464-00tre1p1erm.compute.instacloud-edge.com/api/v1/public/randomjokes/joke/random');
    const json=await response.json();
    return json.data.content;
}

get_joke()
.then((response)=>{
    console.log(response)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("promise resolved")
});
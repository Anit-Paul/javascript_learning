const myPromise=new Promise((resolve, reject) => {
    data = {
        name: "anit",
        age: 21,
        occupation: "Specalist Programmer"
    };
    const error = false;
    setTimeout(() => {
        console.log("async task....");
        (error) ? reject({ msg: "something went wrong" }) : resolve(data);
    }, 2000);
});

async function handlePromise() {
    try{
        const response= await myPromise;
        console.log(response)
    }catch(error){
        console.log(error)
    }
    finally{
        console.log("promise handled successfully!");
    }
}

handlePromise();

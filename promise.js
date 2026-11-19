const promiseOne = new Promise(function (resolve, reject) {
    //do any async task (db calls, network call)
    setTimeout(() => {
        console.log("async task...");
        resolve("anit"); //connecting with .then
    }, 2000);
});

promiseOne.then(function (e) {
    console.log(`promise consumed ${e}`);
});




new Promise((resolve, reject) => {
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
})
.then((data) => {
    console.log(data);
})
.catch((data) => {
    console.log(data);
})
.finally(() => {
    console.log("promise handled successfully");
});

//handling promises using async await
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

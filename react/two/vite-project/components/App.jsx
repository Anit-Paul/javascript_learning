import { useState } from "react"

export default function App() {

    /*let count=0;
    function increaseCounter(){
        
        //this will work for a lot of variables i need to reference many which is not a good way.
        count++;
        let element=document.querySelector("h2")
        element.textContent=`my counter : ${count}`
        
    }*/
    //using use state hook
    let [count,setCount]=useState(0);
    function increaseCounter(){
        count++;
        setCount(count); //it will sent signal that count variable changed and the value will be updated
    }
    return (
        <>
            <h2>my counter : {count}</h2>
            <h3>my counter2 : {count}</h3>
            <button onClick={increaseCounter}>Increment</button>
        </>
    )
}
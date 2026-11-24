import React from "react";
import ReactDOM from "react-dom/client"
/*const element = React.createElement(
    "h1",
    { id: "heading" },
    "hello from react"
);*/

//jsx : javascript xml (looks like html)
// thats why babel will be used which will convert html --> react element
// babel is a js compiler

const element=(<h1 id="first" className="first">
    hello from react
    </h1>);


//react component : it is a function. used for code reusability. The initial of the function should be capital
function App(name){
    return (
        <h1>hello from react component by {name.name}</h1>
    );
} 


//props
//when we pass something in the function it will be accepted as object. It is called props.

function NewComponent(props){
    console.log(props)
    return (
        <>
            <App name="anit"/>
            <h1>props is done.</h1>
            <p>i am {props.name}</p>
            <p>i am of {props.age}</p>
        </>
    );
}
const root = ReactDOM.createRoot(
    document.getElementById("root")
);

console.log(root)
//root.render(App("anit")); //<App/> by this we can also call it
root.render(<NewComponent name="anit" age={22} />)

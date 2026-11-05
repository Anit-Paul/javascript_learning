//getting the buttons
const btn=document.querySelectorAll("button")

//accessing each button and adding some event listener
function changeBackgroundColor(color){
    const body=document.querySelector("body");
    body.style.backgroundColor=color;
}

btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        changeBackgroundColor(button.id);
    });
})
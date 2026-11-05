const btn=document.querySelector(".btn")

function displayBMIValue(value){
    const parent=document.querySelector(".bmi")
    let msg=`your bmi value is ${value}`
    const textNode=document.createTextNode(msg)
    //parent.appendChild(textNode);
    parent.replaceChildren(textNode);
}



btn.addEventListener("click",(e)=>{
    const height=Number(document.querySelector("#height").value);
    const weight=Number(document.querySelector("#weight").value);
    let bmiValue=height/(weight*weight)
    displayBMIValue(bmiValue);
})
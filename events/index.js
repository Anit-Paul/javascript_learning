
/*
btn.addEventListener("click",(e)=>{
}, false);

the third parameter is bydefault false which is to handle event propagation 
event bubling means : inside to outside (false)
event capturing means : outside to inside (true)

to stop bubling we can use stop propagation and to prevent default behaviour we can use preventdefault
*/

function removeElement(item){
    const parent=item.parentNode;
    parent.removeChild(item);
    console.log(parent.tagName)
}



const temp=document.querySelectorAll(".item")
temp.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        removeElement(e.target);
    },false)
});
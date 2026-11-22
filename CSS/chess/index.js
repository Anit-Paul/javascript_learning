const div=document.querySelector(".container")

for(i=0;i<8;i++){
    for(j=0;j<8;j++){
        const child=document.createElement("div")
        if(j%2){
            if(i%2){
                child.style.backgroundColor="brown"
            }else{
                child.style.backgroundColor="white"
            }
        }else{
            if(i%2){
                child.style.backgroundColor="white"
            }else{
                child.style.backgroundColor="brown"
            }
        }
        div.appendChild(child)
    }
}
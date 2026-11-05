temp=document.querySelector(".parent")
console.log(temp)


let ele=document.createElement("div")
ele.appendChild(document.createTextNode("Hello World"))
temp.appendChild(ele)

let newEle=document.createElement("div")
newEle.appendChild(document.createTextNode("Hello World 2"))
ele.replaceWith(newEle)


let element=document.querySelector(".day:nth-child(2)")
let myEle=document.createElement("div")
myEle.appendChild(document.createTextNode("Hello World 3"))
element.replaceWith(myEle)

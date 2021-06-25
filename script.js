let author = document.getElementsByClassName("author");
for(let i = 0; i < author.length; i++) {
    const element = author[i];
    element.style.color = "red";
    element.style.fontSize = "50px";
    element.innerText = "Lekhok-" + i;
}



// --querySelector() & querySelectorAll() ---//

let specialArticle = document.querySelectorAll(".special h2");
// console.log(specialArticle);
for(let i = 0; i < specialArticle.length; i++){
    const element = specialArticle[i];
    element.style.color = "white";
    element.style.backgroundColor = "black";
}
document.body.style.backgroundColor = "cyan";



// --Add element --//

let article = document.body;
let createElement = document.createElement("article");
createElement.setAttribute("class","special");
createElement.innerHTML = "Article -4";
createElement.setAttribute("style","font-size:50px");
article.appendChild(createElement);

let heading = document.createElement("h2");
heading.innerText = "lekhok-4";
createElement.appendChild(heading);

let paragraph = document.createElement("p");
paragraph.innerText = " nishat hasan Muktar ";
createElement.appendChild(paragraph);



// ---remove element --//
// let removeElement = document.querySelector(".article");
// removeElement.remove();

// //--removeChild element --//
// let removeChild = document.querySelector(".special");
// removeChild.removeChild(removeChild.childNodes[2]);


let list = document.getElementById("list-item");
// list.remove();    //--remove a particular element --//

list.removeChild(list.childNodes[9]);
// console.log(list.childNodes);


// --replace element --//

let createReplacement = document.createElement("link");
let textNode = createTextNode("Orange Juice");
createReplacement.appendChild(textNode);


list.replaceChild(createReplacement,list.childNodes[1]);
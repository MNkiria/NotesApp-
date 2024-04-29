// js for the createing text area function

const notesContainer = document.querySelector(".notes-container");
const launchBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Function to store the written data on the browser.

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();

function updateStorage(){
    localStorage.setItem("Notes", notesContainer.innerHTML);
}
// eventListener for the appending function

launchBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})


// adding the eventListener for the delete function.

notesContainer.addEventListener("click", function(deduct){
    if(deduct.target.tagName === "IMG"){
        deduct.target.parentElement.remove();
        updateStorage();
    }
    else if(deduct.target.tagName === "p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("Keydown", event=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
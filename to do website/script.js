let textInput = document.getElementById('textInput');
let ulist = document.getElementById('ulist');
let clist = document.getElementById('clist');
const sad = document.getElementById("sadAudio");
const celebrate = document.getElementById("celebrateAudio");

// adds input from text to list, if empty, alert and plays sad noise.

function addTaskButton() {
    
    if (textInput.value != ''){
        let li = document.createElement("li");
        li.innerHTML = textInput.value;
        ulist.appendChild(li);
        let trash = document.createElement("span");
        trash.innerHTML = "\uF5DE";
        li.appendChild(trash);

        ulist.addEventListener('click', function(x) {
            if(x.target.tagName == "LI"){
                toComplete(li);
            }
        }, false);
    }
    else{
        sad.play();
        alert("Please Fill Out Task");
    }
    textInput.value = '';
}


// function used in addtaskbutton to play music and add li to completed list
// removes li from uncompleted

function toComplete(li){
    celebrate.play();
    clist.appendChild(li);
    x.target.parentElement.remove();
}

// toggles the checked box/cross out

ulist.addEventListener ('click',function(x){
    if(x.target.tagName == "LI"){
        x.target.classList.toggle("checked");
    }
},false);

// remove item from uncompleted list

ulist.addEventListener('click', function(x){
    if(x.target.tagName == "SPAN"){
        x.target.parentElement.remove();
    }
}, false);
// remove item from completed list

clist.addEventListener('click', function(x){
    if(x.target.tagName == "SPAN"){
        x.target.parentElement.remove();
    }
}, false);

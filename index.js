let mainClock = document.getElementById("mainClock");

clockInt = setInterval(() => {
    let myClock = new Date;
   mainClock.innerText = myClock.toLocaleTimeString(); 
}, 1000);

// stopWatch
let count = 0
let difference = 0
let chance = 0
let hour = 0
let minute = 0
let second = 0
let start = document.getElementById("start")
let reset = document.getElementById("reset")
let mainWatch = document.getElementById("mainWatch")
start.addEventListener("click",startWatch)
reset.addEventListener("click",stopWatch)
function startWatch(){
    if (chance == 0){
        chance = 1
        WatchInt = setInterval(() => {
            difference += 1
            hour = String(Math.floor(difference/3600)).padStart(2,"0")
            minute = String(Math.floor((difference -(hour*3600))/60)).padStart(2,"0")
            second = String((difference-minute*60-hour*3600)).padStart(2,"0")
            mainWatch.innerText = difference;
            mainWatch.innerText = hour + ":" + minute + ":" + second
            
        }, 1000);
        reset.classList.remove("visible")
    }
    else{
        chance = 0;
        clearInterval(WatchInt)
        reset.classList.remove("visible")
    }

}

function stopWatch(){
    clearInterval(WatchInt)
    difference = 0
    chance = 0
    reset.classList.add("visible")
    mainWatch.innerText = "00:00:00"
}

// side bar

let settings = document.getElementById("settings")
let sidebarUl = document.getElementsByClassName("sidebarUl")[0]
let attempt = 0
function sideBarVisible(x){
    if (count == 0){
        count = 1
        x.classList.remove("visible")
    }
    else{
        count = 0
        x.classList.add("visible")
    }

}

let navbar = document.getElementsByClassName("navbar")[0]

function changeBodyBackgound(x){
    document.body.style.backgroundColor = x;
    navbar.style.backgroundColor = x;
    document.body.style.backgroundImage = "none";
}

function changeBodyColor(x){
    document.body.style.color = x
}

function changeBodyFont(x){
    document.body.style.fontFamily = x;
}


function changeBodyBackgoundImages(x){
    console.log("bg image clicked")
    document.body.style.backgroundImage = `url(${x})`;
    navbar.style.backgroundColor = "transparent"
}


let messageBox = document.getElementsByClassName("messageBox")[0]
function messageShow(){
    messageBox.classList.remove("visible")
    console.log("timer will available soon")
    setTimeout(() => {
        messageBox.classList.add("visible")
    }, 2000);
}


// Defines a function that opens a specific GitHub repository
function linkCloud(){
  window.open("https://github.com/luthentic/Cloudy")
}

// Defines a function that opens a specific GitHub repository
function linkTrans(){
  window.open("https://github.com/luthentic/TranscationSystemDesgin")
}

// Defines a function that opens a specific GitHub repository
function linkPoker(){
  window.open("https://github.com/luthentic/PokerGame")
}

// Defines a function that opens a specific GitHub repository
function linkMall(){
  window.open("https://github.com/luthentic/AidenMall")
}

// Selects two cursor elements and updates their position to follow the mouse
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",(e)=>{
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;top:" + e.clientY +"px";
});
function linkCloud(){
  window.open("https://github.com/luthentic/Cloudy")
}

function linkTrans(){
  window.open("https://github.com/luthentic/TranscationSystemDesgin")
}

function linkPoker(){
  window.open("https://github.com/luthentic/PokerGame")
}

function linkMall(){
  window.open("https://github.com/luthentic/AidenMall")
}

let cursor = document.querySelector(".cursor");
    let cursor2 = document.querySelector(".cursor2");

      document.addEventListener("mousemove",(e)=>{
      cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px;top:" + e.clientY +"px";
    });

window.addEventListener('load', function loadOver() {
    let divList = document.getElementsByTagName("div");
    divList[divList.length-1].style.display = "none";
});


window.onload = function() {
  if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      document.getElementsByTagName("body")[0].classList.add("mobile");
    }

    var scrollableArea = document.querySelector('.scrollable-area');
    var maxScrollableDistance = document.documentElement.scrollHeight - window.innerHeight;

    if (document.body.classList.contains("mobile")) {
      console.log("mobile");
      document.querySelector('.scrollable-area').style.removeProperty('overflow');
      document.querySelector('.scrollable-area').style.overflow = 'auto';
    }
    else{
      console.log("not mobile");
      
      function updateScrollableArea() {
        if (maxScrollableDistance <= 14) {
          console.log("hidden 31")
          scrollableArea.style.overflow = 'hidden';
        } else {
          console.log("auto 34")
          scrollableArea.style.overflow = 'auto';
        }
        
      }
    
      window.addEventListener('resize', function() {
        maxScrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
        updateScrollableArea();
      });
    
      updateScrollableArea();
    }
};


window.addEventListener('load', function loadOver() {
    document.querySelector('.scrollable-area').style.overflow = 'hidden';
    document.getElementById("one").classList.remove("hidden");
    setTimeout(() => {document.getElementById("two").classList.remove("hidden")}, 800)
    setTimeout(() => {document.getElementById("three").classList.remove("hidden")}, 1800)
    setTimeout(() => {document.getElementById("four").classList.remove("hidden")}, 2600)
});

document.getElementById("four").addEventListener('animationend', () => {
    document.getElementById("one").classList.add("fadeout");
    document.getElementById("two").classList.add("fadeout");
    document.getElementById("three").classList.add("fadeout");
    document.getElementById("four").classList.add("fadeout");
    document.getElementById("animTimer").classList.add("fadeout");
    console.log("fadeout");

    if (document.body.classList.contains("mobile")) {
      console.log("auto 67");
      document.querySelector('.scrollable-area').style.removeProperty('overflow');
      document.querySelector('.scrollable-area').style.overflow = 'auto';
    }
    else if (maxScrollableDistance <= 14) {
        console.log("hidden 72")
        scrollableArea.style.overflow = 'hidden';
    } else {
        console.log("auto 75")
        scrollableArea.style.overflow = 'auto';
    }


});


document.getElementById("animTimer").addEventListener('animationend', () => {
    document.getElementById("first").classList.add("hidden");
    document.getElementById("logo").classList.remove("hidden");
    console.log("logo")
    setTimeout(() => {document.getElementById("menu").classList.remove("hidden")}, 500)
    setTimeout(() => {document.getElementById("aboutMe").classList.remove("hidden")}, 1000)

    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            document.getElementsByTagName("body")[0].classList.add("mobile");
            document.getElementById("thumbnails").classList.add("mobile");
            document.getElementById("aboutMe").classList.add("mobile");
            document.getElementById("srpg").classList.add("mobile");
            document.getElementById("vs").classList.add("mobile");
            document.getElementById("svs").classList.add("mobile");
            document.getElementById("onati").classList.add("mobile");
            document.getElementById("wo").classList.add("mobile");
            document.getElementById("contacts").classList.add("mobile");
         }
});




document.getElementById("aboutMeBTN").addEventListener('click', () => {
    document.getElementById("aboutMe").classList.remove("hidden");
    document.getElementById("games").classList.add("hidden");
    document.getElementById("contacts").classList.add("hidden");
    document.getElementById("aboutMeBTN").classList.add("selected");
    document.getElementById("gamesBTN").classList.remove("selected");
    document.getElementById("contactsBTN").classList.remove("selected");
    document.title = "BinzuDev.com | About Me";
});


document.getElementById("gamesBTN").addEventListener('click', () => {
    document.getElementById("aboutMe").classList.add("hidden");
    document.getElementById("games").classList.remove("hidden");
    document.getElementById("contacts").classList.add("hidden");
    document.getElementById("aboutMeBTN").classList.remove("selected");
    document.getElementById("gamesBTN").classList.add("selected");
    document.getElementById("contactsBTN").classList.remove("selected");
    document.title = "BinzuDev.com | My Games";
});


document.getElementById("contactsBTN").addEventListener('click',() => {
    document.getElementById("aboutMe").classList.add("hidden");
    document.getElementById("games").classList.add("hidden");
    document.getElementById("contacts").classList.remove("hidden");
    document.getElementById("aboutMeBTN").classList.remove("selected");
    document.getElementById("gamesBTN").classList.remove("selected");
    document.getElementById("contactsBTN").classList.add("selected");
    document.title = "BinzuDev.com | Socials";
});


function reset() {
    document.getElementById("srpg").classList.add("hidden");
    document.getElementById("vs").classList.add("hidden");
    document.getElementById("svs").classList.add("hidden");
    document.getElementById("onati").classList.add("hidden");
    document.getElementById("wo").classList.add("hidden");
    document.getElementById("srpgBTN").classList.remove("selected");
    document.getElementById("vsBTN").classList.remove("selected");
    document.getElementById("svsBTN").classList.remove("selected");
    document.getElementById("onatiBTN").classList.remove("selected");
    document.getElementById("woBTN").classList.remove("selected");
};

document.getElementById("srpgBTN").addEventListener('click', () => {
    reset();
    document.getElementById("srpg").classList.remove("hidden");
    document.getElementById("srpgBTN").classList.add("selected");
});

document.getElementById("vsBTN").addEventListener('click', () => {
    reset();
    document.getElementById("vs").classList.remove("hidden");
    document.getElementById("vsBTN").classList.add("selected");
});

document.getElementById("svsBTN").addEventListener('click', () => {
    reset();
    document.getElementById("svs").classList.remove("hidden");
    document.getElementById("svsBTN").classList.add("selected");
});

document.getElementById("onatiBTN").addEventListener('click', () => {
    reset();
    document.getElementById("onati").classList.remove("hidden");
    document.getElementById("onatiBTN").classList.add("selected");
});

document.getElementById("woBTN").addEventListener('click', () => {
    reset();
    document.getElementById("wo").classList.remove("hidden");
    document.getElementById("woBTN").classList.add("selected");
});

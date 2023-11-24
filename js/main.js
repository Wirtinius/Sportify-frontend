// Back-to-top button
window.addEventListener("scroll", function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

var backToTopButton = document.querySelector('.back-to-top');
backToTopButton.addEventListener("click", function () {
    var scrollOptions = {
        top: 0,
        left: 0,
        behavior: 'smooth'
    };

    window.scrollTo(scrollOptions);
});


// audio 
var atHome = document.querySelector('.sound');
var audio = new Audio('audio/Survivor - Eye Of The Tiger_(muzfan.net).mp3');

atHome.addEventListener("click", function () {
    audio.play();
})

atHome.addEventListener("keypress", function (event) {
    if (event.key === "p") {
        audio.pause();
    }
})



var footer = document.querySelector('.alen');

footer.addEventListener("mouseover", function (event) {
      event.target.style.color = "orange";  
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false,
  );
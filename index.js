const navbarOpen = document.querySelector(".navbar-open");
const navbarClose = document.querySelector(".navbar-close");
const navbarItems = document.querySelector(".navbar-items");
const albums = [...document.querySelectorAll(".sec-albums-card")];

navbarOpen.addEventListener("click", () => {
    navbarItems.classList.add("navbar-active");
});

navbarClose.addEventListener("click", () => {
    navbarItems.classList.remove("navbar-active");
});

var currentAlbumSlide = 0;

function showNextAlbum() {
    albums[currentAlbumSlide].classList.toggle("album-visible");
    currentAlbumSlide++;
    if (currentAlbumSlide >= albums.length) currentAlbumSlide = 0;
    else if (currentAlbumSlide < 0) currentAlbumSlide = albums.length;
    albums[currentAlbumSlide].classList.toggle("album-visible");
}

function showPreviousAlbum() {
    albums[currentAlbumSlide].classList.toggle("album-visible");
    currentAlbumSlide--;
    if (currentAlbumSlide >= albums.length) currentAlbumSlide = 0;
    else if (currentAlbumSlide < 0) currentAlbumSlide = albums.length-1;
    albums[currentAlbumSlide].classList.toggle("album-visible");
}

// जुगनू खंड
// let canvas = document.getElementById("fireflies");
// let c = canvas.getContext("2d")
// w = canvas.width = window.innerWidth;
// h = canvas.height = window.innerHeight;

// class firefly {
//     constructor() {
//         this.x = Math.random() * w;
//         this.y = Math.random() * h;
//         this.s = (Math.random() * 2) + 4;
//         this.ang = Math.random() * 2 * Math.PI;
//         this.v = (this.s * this.s) / 4;
//     }
    
//     move() {
//         this.x += this.v * Math.cos(this.ang);
//         this.y += this.v * Math.cos(this.ang);
//         this.ang += (Math.random() * Math.PI);
//         console.log(this.ang);
//     }

//     show() {
//         c.beginPath()
//         c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
//         c.fillStyle = "#FFF";
//         c.fill();
//     }
// }
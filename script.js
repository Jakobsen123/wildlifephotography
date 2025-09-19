let images = document.getElementsByClassName("main")
let bigimg = document.getElementById("bigimg")

let largepic = document.getElementsByClassName("largepic")[0]

let largepicbtn = document.getElementById("largepicbtn")

function ShowImage(event) {
    bigimg.src = event.target.src;
    largepic.style.display = "block";
}

function hideimg() {
    bigimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s";
    largepic.style.display = "none";
}

for (let i = 0; i < images.length; i++) {
    let currentimage = images[i];
    currentimage.addEventListener("click", ShowImage);
    console.log("hei")
}
 
largepicbtn.addEventListener("click",hideimg)

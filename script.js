let dist = 0
let slider = document.getElementById("slider")



function sliderRight() {
    dist = dist + 100
    console.log(dist)
    if (dist == 300) {
        dist = 0
    }
    slider.style.transform = "translateX(-" + dist + "%)"
}

function sliderLeft() {
    dist = dist - 100
    console.log(dist)
    if (dist == -100) {
        dist = 200
    }
    slider.style.transform = "translateX(-" + dist + "%)"
}
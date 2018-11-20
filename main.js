document.addEventListener("DOMContentLoaded", () => {
    var box1 = document.getElementById("1");
    var box2 = document.getElementById("2");
    var box3 = document.getElementById("3");
    var box4 = document.getElementById("4");
    var box5 = document.getElementById("5");
    var box6 = document.getElementById("6");
    var box7 = document.getElementById("7");
    var box8 = document.getElementById("8");
    var box9 = document.getElementById("9");
    var box10 = document.getElementById("10");
    var box11 = document.getElementById("11");
    var box12 = document.getElementById("12");
    var box13 = document.getElementById("13");
    var box14 = document.getElementById("14");
    var box15 = document.getElementById("15");
    var box16 = document.getElementById("16");
    var canvas1 = document.getElementById("canvas1");
    var canvas2 = document.getElementById("canvas2");
    var canvas3 = document.getElementById("canvas3");
    var canvas4 = document.getElementById("canvas4");
    let color
    canvas1.addEventListener("click", () => {
        color = "red"
      })
    canvas2.addEventListener("click", () => {
        color = "blue"
      })
    canvas3.addEventListener("click", () => {
        color = "green"
      })
    canvas4.addEventListener("click", () => {
        color = "yellow"
      })
    box1.addEventListener("click", () => {
        box1.classList.toggle(color)
        box1.classList.toggle("none")
      })
    box2.addEventListener("click", () => {
        box2.classList.toggle(color)
        box2.classList.toggle("none")
      })
    box3.addEventListener("click", () => {
        box3.classList.toggle(color)
        box3.classList.toggle("none")
      })
    box4.addEventListener("click", () => {
        box4.classList.toggle(color)
        box4.classList.toggle("none")
      })
    box5.addEventListener("click", () => {
        box5.classList.toggle(color)
        box5.classList.toggle("none")
      })
    box6.addEventListener("click", () => {
        box6.classList.toggle(color)
        box6.classList.toggle("none")
      })
    box7.addEventListener("click", () => {
        box7.classList.toggle(color)
        box7.classList.toggle("none")
      })
    box8.addEventListener("click", () => {
        box8.classList.toggle(color)
        box8.classList.toggle("none")
      })
    box9.addEventListener("click", () => {
        box9.classList.toggle(color)
        box9.classList.toggle("none")
      })
    box10.addEventListener("click", () => {
        box10.classList.toggle(color)
        box10.classList.toggle("none")
      })
    box11.addEventListener("click", () => {
        box11.classList.toggle(color)
        box11.classList.toggle("none")
      })
    box12.addEventListener("click", () => {
        box12.classList.toggle(color)
        box12.classList.toggle("none")
      })
    box13.addEventListener("click", () => {
        box13.classList.toggle(color)
        box13.classList.toggle("none")
      })
    box14.addEventListener("click", () => {
        box14.classList.toggle(color)
        box14.classList.toggle("none")
      })
    box15.addEventListener("click", () => {
        box15.classList.toggle(color)
        box15.classList.toggle("none")
      })
    box16.addEventListener("click", () => {
        box16.classList.toggle(color)
        box16.classList.toggle("none")
      })
})

let n = 1
const hero = document.getElementById("hero")
let sliderChange = () => {
    n = n + 1
    hero.style.backgroundImage = `url('./images/hero-bg${n}.jpg')`
    if (n === 3) { n = 0 }
    return n
}
setInterval(sliderChange, 5000);
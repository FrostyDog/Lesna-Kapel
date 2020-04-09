let n = 1
const hero = document.getElementById("hero")
console.log(hero)
let sliderChange = () => {
    n = n + 1
    hero.style.backgroundImage = `url('./images/hero-bg${n}.jpg')`
    console.log("and now n is" + n)
    if (n === 3) { n = 0 }
    return n
}
setInterval(sliderChange, 5000);
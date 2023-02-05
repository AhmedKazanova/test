

let goToTop = document.getElementById("goToTop")
let header = document.getElementById("header")
goToTop.onclick = function(){window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}

window.addEventListener("scroll", function() {
    let top = this.scrollY

    if(top >= 200){
        goToTop.style.opacity = 1
        header.classList.add("active")
    }else {
        goToTop.style.opacity = 0
        header.classList.remove("active")
    }
});
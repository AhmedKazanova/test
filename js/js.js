

let goToTop = document.getElementById("goToTop")
let header = document.getElementById("header")
let headingType = document.getElementById("demoType")
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


var i = 0;
var txt =  `شـركـة الـرائـدة الكـبـرى تُـعـد الرائدة في مجال برمجة وتصميم المواقع وتطبيقات الجوال والمتاجر الإلكترونية , نسعى دائما أن نكون الخيار الأول لأفكارك الإبداعية والمتميزة وتحويلها الى حقيقة بأعلى جودة وفي أسرع وقت للمساهمة في انجاح مشروعك`
var speed = 70; 

function typeWriter() {
  if (i < txt.length) {
    if(headingType != null || headingType != undefined){
      headingType.innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}
typeWriter()
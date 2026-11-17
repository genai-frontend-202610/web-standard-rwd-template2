const body = document.querySelector("body");
const fixedArrow = document.querySelector(".fixed-arrow");
const navList = document.querySelectorAll(".nav-list li");
const mobNavBtn = document.querySelector(' .mob-nav-btn')
window.addEventListener("scroll", () => {
 if (window.scrollY >= 100) {
  body.classList.add("scroll");
 } else {
  body.classList.remove("scroll");
 }
});

fixedArrow.addEventListener("click", () => {
 window.scrollTo({
  top: 0,
  behavior: "smooth",
 });
});

navList.forEach((nav, i) => {
 nav.addEventListener("click", (e) => {
    e.preventDefault()
  console.log(nav, i);
  document.querySelector(`#sec${i}`)?.scrollIntoView({
   behavior: "smooth",
  });
 });
});


mobNavBtn.addEventListener('click',()=>{
    body.classList.toggle('nav-open')
})


const sec4MenuList = document.querySelectorAll(".sec-4-menu li");
const sec4ContentList = document.querySelectorAll(".sec-4-content-wrap .content");
let i = 0;

init(i);

function init(x) {
 sec4MenuList[x].classList.add("active");
 sec4ContentList[x].classList.add("on");
}

function reset() {
 for (let i = 0; i < sec4MenuList.length; i++) {
  sec4MenuList[i].classList.remove("active");
  sec4ContentList[i].classList.remove("on");
 }
}

sec4MenuList.forEach((menu, index) => {
 menu.addEventListener("click", (e) => {
    e.preventDefault()
  // console.log(menu,index)
  reset();
  init(index);
 });
});




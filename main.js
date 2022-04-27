const closeMenu = document.querySelector(".closemenu");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const backDrop = document.querySelector(".backdrop");
const arrowDown1 = document.querySelector(".arrowdown1");
const arrowDown2 = document.querySelector(".arrowdown2");
const dropDown = document.querySelector(".dropdown");
const dropDown1 = document.querySelector(".dropdown1");
const arrowDesktop = document.querySelector('.arrowdown-desktop');
const arrowDesktop1 = document.querySelector('.arrowdown-desktop1');
const dropDownDesktop = document.querySelector(".desktop");
const dropDownDesktop1 = document.querySelector(".desktop1")

hamburger.addEventListener("click", () => {
  navBar.style.display = "block";

  backDrop.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  navBar.style.display = "none";
  backDrop.style.display = "none";
 
});

arrowDown1.addEventListener("click", () => {
  dropDown.classList.toggle("rotate");
  arrowDown1.classList.toggle("rotate_arrow");
});
arrowDown2.addEventListener("click", () => {
  dropDown1.classList.toggle("rotate");
  arrowDown2.classList.toggle("rotate_arrow");
});
arrowDesktop.addEventListener("click", () => {
  dropDownDesktop.classList.toggle("rotate");
  arrowDesktop.classList.toggle("rotate_arrow");
})
arrowDesktop1.addEventListener("click", () => {
  dropDownDesktop1.classList.toggle("rotate");
  arrowDesktop1.classList.toggle("rotate_arrow");
})
console.log(b);

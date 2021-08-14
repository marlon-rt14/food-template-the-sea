window.addEventListener("load", (e) => {
  let menuBebida = document.querySelector("#drink-menu");
  menuBebida.style.display = "none";
  if (window.scrollY == 0) {
    document.querySelector(".nav").style.position = "relative";
  }
  const navLiRes = document.querySelectorAll(".nav__li");
  const navLi = document.querySelectorAll(".nav__ul .nav__li");

  navLiClick(navLiRes);
});

function navLiClick(lista) {
  for (const element of lista) {
    //   console.log(element);
    element.addEventListener("click", (e) => {
      let direction = element.firstElementChild.getAttribute("href");
      window.location = direction;
    });
  }
}

window.addEventListener("scroll", (e) => {
  let nav = document.querySelector(".nav");
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    nav.style.position = "fixed";
  } else {
    nav.style.position = "relative";
  }
});

function menuClick(menuBebida) {
  menuBebida.addEventListener("click", (e) => {
    alert("hola bebida");
    menuComida.style.display = "none";
    menuBebida.style.display = "relative";
  });
}

let bebida = document.querySelector(".drink-menu");
let comida = document.querySelector(".food-menu");

bebida.addEventListener("click", (e) => {
    let menuComida = document.querySelector("#food-menu");
    let menuBebida = document.querySelector("#drink-menu");
    menuComida.style.display = "none";
    menuBebida.style.display = "block";
});

comida.addEventListener("click", (e) => {
    let menuComida = document.querySelector("#food-menu");
    let menuBebida = document.querySelector("#drink-menu");
    menuBebida.style.display = "none";
    menuComida.style.display = "block";
});
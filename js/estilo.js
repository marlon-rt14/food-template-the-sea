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

let popup = document.getElementById("popup");
const imgContainer = document.querySelectorAll(".gallery-img-container");
for (let i = 0; i < imgContainer.length; i++) {
  let idImageGallery = `idImageGallery${i}`;
  imgContainer[i].firstElementChild.setAttribute("id", `${idImageGallery}`);
  let imgGallery = document.getElementById(`${idImageGallery}`);
  imgGallery.addEventListener("click", (e) => {
    let modalImg = document.getElementById("modalImg");
    popup.style.display = "block";
    let source = imgGallery.getAttribute("src");
    modalImg.setAttribute("src", `${source}`);
  });
}

const span = document.querySelector(".close");

span.addEventListener("click", (e) => {
  popup.style.display = "none";
});

popup.addEventListener("mousemove", (e) => {
  let modalImg = document.getElementById("modalImg");
  modalImg.style.filter = "brightness(1)";
  modalImg.style.transform = "scale(1)";
});

const modalContent = document.querySelector(".modal-content");
modalContent.addEventListener("mouseleave", (e) => {
  popup.addEventListener("click", (evt) => {
    popup.style.display = "none";
  });
});

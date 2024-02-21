const ANCHO_MENU_IZQ_VIEWPORT_ANCHO = "170px";
const ANCHO_MENU_IZQ_VIEWPORT_ANGOSTO = "100vw";
const PADDING_MENU_IZQ = "10px";
const PADDING_CONTENIDO = "15px";
const ANCHO_MAXIMO_DE_VIEWPORT_ANGOSTO = 575;

function main() {
  const menuIzq = document.querySelector(".menu_izq");
  const contenido = document.querySelector(".contenido");
  const botonesAbrirMenuIzq = document.querySelectorAll(".abrir_menu_izq");
  const botonCerrarMenuIzq = document.querySelector("#cerrar_menu_izq");

  botonesAbrirMenuIzq.forEach((boton) => {
    boton.addEventListener("click", () => {
      if (window.innerWidth < ANCHO_MAXIMO_DE_VIEWPORT_ANGOSTO) {
        menuIzq.style.width = ANCHO_MENU_IZQ_VIEWPORT_ANGOSTO;
        contenido.style.padding = "0px";
      } else {
        menuIzq.style.width = ANCHO_MENU_IZQ_VIEWPORT_ANCHO;
      }
      menuIzq.style.padding = PADDING_MENU_IZQ;
    })
  });
  botonCerrarMenuIzq.addEventListener("click", () => {
    contenido.style.padding = PADDING_CONTENIDO;
    menuIzq.style.width = "0px";
    menuIzq.style.padding = "0px";
  });

}

main();
function main() {
  const menuIzq = document.querySelector(".menu_izq")
  const botonCerrarMenuIzq = document.querySelector("#cerrar_menu_izq");
  botonCerrarMenuIzq.addEventListener("click", () => {
    menuIzq.style.width = "0px";
    menuIzq.style.padding = "0px";
  });
}

main();
document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const modalCarrito = document.getElementById("jsModalCarrito");
  const carritoProductosModal = document.getElementById(
    "carrito-productos-modal"
  );
  const carritoIcono = document.querySelector(".fa-cart-shopping");
  const emptyCartMessage = document.getElementById("empty-cart-message");

  // Función para verificar si el carrito está vacío
  function checkIfCartIsEmpty() {
    const products = carritoProductosModal.querySelectorAll(".modal__item");
    if (products.length === 0) {
      emptyCartMessage.style.display = "block";
    } else {
      emptyCartMessage.style.display = "none";
    }
  }

  // Event listener para abrir el modal del carrito cuando se hace clic en el icono del carrito
  carritoIcono.addEventListener("click", () => {
    if (carritoProductosModal) {
      modalCarrito.classList.add("active");
    }
  });
  // Event listener para cerrar el modal
  closeModalButton.addEventListener("click", () => {
    modalCarrito.classList.remove("active");

    // Limpia el contenido del carrito modal al cerrarlo
    carritoProductosModal.innerHTML = "";

    // Verifica si el carrito está vacío
    checkIfCartIsEmpty();
  });
  // Verifica si el carrito está vacío al cargar la página
  checkIfCartIsEmpty();
});
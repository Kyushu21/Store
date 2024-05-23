document.addEventListener("DOMContentLoaded", function () {
  // Variables
  const addToCartButtons = document.querySelectorAll(".button-link");
  const modalCarrito = document.getElementById("jsModalCarrito");
  const closeModalButton = document.querySelector(".jsModalClose");
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

  // Función para eliminar un producto del carrito
  function eliminarProducto(event) {
    const producto = event.target.closest(".modal__item");
    producto.remove();
    checkIfCartIsEmpty(); // Verifica si el carrito está vacío
  }

  // Event listener para agregar productos al carrito
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Lógica para agregar productos al carrito
      const producto =
        button.parentNode.querySelector(".new-title").textContent;
      const precio =
        button.parentNode.querySelector(".products-price").textContent;

      // Crea un nuevo elemento para mostrar el producto en el modal
      const productoElemento = document.createElement("div");
      productoElemento.classList.add("modal__item");
      productoElemento.innerHTML = `
      
            <div class="modal__text-product">
                <p>${producto}</p>          
                <p><strong>${precio}</strong></p>
            </div>
        `;

      // Agrega el producto al carrito modal
      carritoProductosModal.appendChild(productoElemento);

      // Event listener para eliminar el producto recién agregado
      const botonEliminar = productoElemento.querySelector(".btn-eliminar");
      botonEliminar.addEventListener("click", eliminarProducto);

      // Verifica si el carrito está vacío
      checkIfCartIsEmpty();
    });
  });

  // Event listener para cerrar el modal
  closeModalButton.addEventListener("click", () => {
    modalCarrito.classList.remove("active");
  });

  // Event listener para abrir el modal del carrito cuando se hace clic en el icono del carrito
  carritoIcono.addEventListener("click", () => {
    if (carritoProductosModal) {
      modalCarrito.classList.add("active");
    }
  });

  // Cerrar modal haciendo clic fuera del contenido del modal
  window.addEventListener("click", (event) => {
    if (event.target === modalCarrito) {
      modalCarrito.classList.remove("active");
    }
  });

  // Verifica si el carrito está vacío al cargar la página
  checkIfCartIsEmpty();
});

document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const addToCartButtons = document.querySelectorAll('.custom-button-link');
    const modalCarrito = document.getElementById('customModalCarrito');
    const closeModalButton = document.querySelector('.jsCustomModalClose');
    const carritoProductosModal = document.getElementById('custom-carrito-productos-modal');
    const carritoIcono = document.querySelector('.fa-cart-shopping');
    const emptyCartMessage = document.getElementById('custom-empty-cart-message');

    // Función para verificar si el carrito está vacío
    function checkIfCartIsEmpty() {
        const products = carritoProductosModal.querySelectorAll('.custom-modal__item');
        if (products.length === 0) {
            emptyCartMessage.style.display = 'block';
        } else {
            emptyCartMessage.style.display = 'none';
        }
    }

    // Event listener para abrir el modal y agregar productos al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Lógica para agregar productos al carrito
            const producto = button.parentNode.querySelector('.custom-new-title').textContent;
            const precio = button.parentNode.querySelector('.custom-products-price').textContent;

            // Crea un nuevo elemento para mostrar el producto en el modal
            const productoElemento = document.createElement('div');
            productoElemento.classList.add('custom-modal__item');
            productoElemento.innerHTML = `
                <div class="custom-modal__text-product">
                    <p>${producto}</p>
                    <p><strong>${precio}</strong></p>
                </div>
            `;

            // Agrega el producto al carrito modal
            carritoProductosModal.appendChild(productoElemento);

            // Verifica si el carrito está vacío
            checkIfCartIsEmpty();

            // Abre el modal
            modalCarrito.classList.add('active');
        });
    });

    // Event listener para cerrar el modal
    closeModalButton.addEventListener('click', () => {
        modalCarrito.classList.remove('active');

        // Limpia el contenido del carrito modal al cerrarlo
        carritoProductosModal.innerHTML = '';

        // Verifica si el carrito está vacío
        checkIfCartIsEmpty();
    });

    // Event listener para abrir el modal del carrito cuando se hace clic en el icono del carrito
    carritoIcono.addEventListener('click', () => {
        // Abre el modal
        modalCarrito.classList.add('active');

        // Verifica si el carrito está vacío
        checkIfCartIsEmpty();
    });

    // Cerrar modal haciendo clic fuera del contenido del modal
    window.addEventListener('click', event => {
        if (event.target === modalCarrito) {
            modalCarrito.classList.remove('active');

            // Limpia el contenido del carrito modal al cerrarlo
            carritoProductosModal.innerHTML = '';

            // Verifica si el carrito está vacío
            checkIfCartIsEmpty();
        }
    });

    // Verifica si el carrito está vacío al cargar la página
    checkIfCartIsEmpty();
});

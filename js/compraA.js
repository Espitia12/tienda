document.addEventListener("DOMContentLoaded", function() {
  // Obtén todos los botones de compra
  var buyButtons = document.querySelectorAll(".card .buy-button");
  var cartCount = document.getElementById("cart-count");

  // Agrega un evento de clic a cada botón de compra
  buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Obtén el número actual del carrito
      var currentCount = parseInt(cartCount.textContent);

      // Incrementa el número del carrito
      var newCount = currentCount + 1;

      // Actualiza el número del carrito en la interfaz
      cartCount.textContent = newCount;

      // Muestra un mensaje de compra realizada
      alert("¡Has comprado el producto!");
    });
  });
});

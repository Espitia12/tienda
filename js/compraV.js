document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los botones de compra
    var buyButtons = document.querySelectorAll(".card button");
  
    // Agrega un evento de clic a cada botón de compra
    buyButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Obtén el nombre del producto desde el texto del elemento hermano
        var productName = this.previousElementSibling.textContent;
  
        // Muestra un mensaje de compra realizada con el nombre del producto
        alert("¡Has comprado " + productName + "!");
      });
    });
  });
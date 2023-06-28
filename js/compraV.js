document.addEventListener("DOMContentLoaded", function() {

  var buyButtons = document.querySelectorAll(".card .buy-button");
  var cartCount = document.getElementById("cart-count");


  buyButtons.forEach(function(button) {
    button.addEventListener("click", function() {

      var currentCount = parseInt(cartCount.textContent);

      var newCount = currentCount + 1;


      cartCount.textContent = newCount;

      alert("¡Has comprado el producto!");
    });
  });
});

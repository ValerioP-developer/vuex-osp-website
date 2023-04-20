$( document ).ready(function() { 

/*
fetch('/configuration')
  .then(function (result) {
    console.log("configuration")
    return result.json();
  })
  .then(function (json) {
    window.config = json;
    window.stripe = Stripe(config.publicKey);
  });
*/
// When the form is submitted...
var submitBtn = document.querySelector('#submit');
submitBtn.addEventListener('click', function (evt){
var quantity=document.getElementById("quantity");
   // Create the checkout session
  fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    //  quantity: quantity.value, // with the quantity
    quantity: 1
    }),
  }).then(function (result) {
    return result.json();
  }).then(function (data) {
    // Redirect to Checkout. with the ID of the
    // CheckoutSession created on the server.
    //alert( data.sessionId )
    stripe.redirectToCheckout({
      sessionId: data.sessionId,
    })
    .then(function(result) {
      // If redirection fails, display an error to the customer.
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
});


})
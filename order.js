function redirectToMenu() {
    window.location.href = 'menu.html';
}


document.addEventListener('DOMContentLoaded', function () {
    // Retrieve dish details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDish = urlParams.get('item');
    const dishPrice = urlParams.get('price');

    // Display selected dish details
    const selectedDishDiv = document.getElementById('selectedDish');
    selectedDishDiv.innerHTML = `<p>You have selected: <strong>${selectedDish}</strong></p>
                                  <p>Price: ₹${dishPrice}</p>`;

    // Add event listener to the "Place Order" button
    const placeOrderButton = document.getElementById('placeOrderButton');
    placeOrderButton.addEventListener('click', placeOrder);
});

// Function to place order
function placeOrder() {
    // Implement your logic to place the order
    alert('Your order has been placed!');
}
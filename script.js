<script>
        // Function to add an item to the cart
        function addToCart(name, price) {
            // Create a new cart item
            var item = {
                name: name,
                price: price
            };

            // Get existing cart items from localStorage or initialize an empty array
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

            // Add the new item to the cart
            cartItems.push(item);

            // Save the updated cart items to localStorage
            localStorage.setItem('cartItems', JSON.stringify(cartItems));

            // Refresh the cart display
            displayCart();
        }

        // Function to display cart items
        function displayCart() {
            var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            var cartContainer = document.querySelector('.cart-items');
            var total = 0;

            // Clear the cart display
            cartContainer.innerHTML = '';

            // Loop through each item in the cart
            cartItems.forEach(function(item) {
                // Create a new cart item element
                var cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');

                // Set the inner HTML for the cart item
                cartItem.innerHTML = `
                    <p>${item.name} - $${item.price.toFixed(2)}</p>
                `;

                // Append the cart item to the cart container
                cartContainer.appendChild(cartItem);

                // Add the item price to the total
                total += item.price;
            });

            // Update the total in the cart display
            document.getElementById('cart-total').textContent = total.toFixed(2);
        }

        // Add event listeners to all add-to-cart buttons
        var addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                var name = this.getAttribute('data-name');
                var price = parseFloat(this.getAttribute('data-price'));
                addToCart(name, price);
            });
        });

        // Display cart items when the page loads
        displayCart();
    </script>
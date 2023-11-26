function createProductRecommendationWidget() {

    // Variables for product info
    var prod1Name = "Boyfriend T-Shirt with Chest Logo"
    var prod1Url = "https://demostore.x-cart.com/fashion/clothing/boyfriend-t-shirt-with-chest-logo"
    var prod1Image = "https://demostore.x-cart.com/var/images/product/400.400/clo_1.jpg"
    var prod1Price = "$39.48"

    var prod2Name = "Sleeved Mini Dress in Color Block"
    var prod2Url = "https://demostore.x-cart.com/fashion/clothing/sleeved-mini-dress-in-color-block"
    var prod2Image = "https://demostore.x-cart.com/var/images/product/300.300/clo_7_1.jpg"
    var prod2Price = "$130.31"

    var prod3Name = "Waist Tie Dress in Blue and White Stripe"
    var prod3Url = "https://demostore.x-cart.com/fashion/clothing/waist-tie-dress-in-blue-and-white-stripe"
    var prod3Image = "https://demostore.x-cart.com/var/images/product/400.400/clo_3.jpg"
    var prod3Price = "$13.15"

    var prod4Name = "Ultimate T-Shirt with Crew Neck in Red"
    var prod4Url = "https://demostore.x-cart.com/fashion/clothing/ultimate-t-shirt-with-crew-neck-in-red"
    var prod4Image = "https://demostore.x-cart.com/var/images/product/300.300/clo_4.jpg"
    var prod4Price = "$52.64"

    var prod5Name = "Multicolored Dress with Balloon Sleeves"
    var prod5Url = "https://demostore.x-cart.com/fashion/clothing/multicolored-dress-with-balloon-sleeves"
    var prod5Image = "https://demostore.x-cart.com/var/images/product/400.400/clo_5.jpg"
    var prod5Price = "$33.55"

    var prod6Name = "Tall Pleated Midi Skirt in Check"
    var prod6Url = "https://demostore.x-cart.com/fashion/clothing/tall-pleated-midi-skirt-in-check"
    var prod6Image = "https://demostore.x-cart.com/var/images/product/400.400/clo_6.jpg"
    var prod6Price = "$19.73"

    // HTML for the widget
    var widgetHtml = `
        <div id="product-recommendation-widget" style="display: flex; overflow: hidden; position: relative;">

            <div id="product-recommendation-container" style="display: flex; transition: transform 0.3s ease-in-out;">

                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod1Url}" target="_blank">
                <b>${prod1Name}</b>
                <img src="${prod1Image}" alt="${prod1Name}" style="width: 100%; height: auto;">${prod1Price}</a>
                </div>
            
                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod2Url}" target="_blank">
                <b>${prod2Name}</b>
                <img src="${prod2Image}" alt="${prod2Name}" style="width: 100%; height: auto;">${prod2Price}</a>
                </div>
            
                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod3Url}" target="_blank">
                <b>${prod3Name}</b>
                <img src="${prod3Image}" alt="${prod3Name}" style="width: 100%; height: auto;">${prod3Price}</a>
                </div>
            
                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod4Url}" target="_blank">
                <b>${prod4Name}</b>
                <img src="${prod4Image}" alt="${prod4Name}" style="width: 100%; height: auto;">${prod4Price}</a>
                </div>
            
                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod5Url}" target="_blank">
                <b>${prod5Name}</b>
                <img src="${prod5Image}" alt="${prod5Name}" style="width: 100%; height: auto;">${prod5Price}</a>
                </div>
            
                <div class="product-slot" style="min-width: 33.33%; padding: 10px; box-sizing: border-box; border: 1px solid #ccc; text-align: center;">
                <a href="${prod6Url}" target="_blank">
                <b>${prod6Name}<br><br></b>
                <img src="${prod6Image}" alt="${prod6Name}" style="width: 100%; height: auto;">${prod6Price}</a>
                </div>

            </div>
            <button id="scroll-left" style="position: absolute; left: 0; top: 50%; transform: translateY(-50%);">←</button>
            <button id="scroll-right" style="position: absolute; right: 0; top: 50%; transform: translateY(-50%);">→</button>
        </div>`;

    // Insert the widget into the DOM
    var productDetailsInfo = document.querySelector('.product-details-info');
    if (productDetailsInfo) {
        productDetailsInfo.innerHTML += widgetHtml;
    } else {
        console.warn('Product details info container not found.');
        return;
    }

    var scrollContainer = document.getElementById('product-recommendation-container');
    var productSlots = document.querySelectorAll('.product-slot');
    var totalProducts = productSlots.length;
    var visibleProducts = 3;

    // Scroll functionality
    var scrollIndex = 0;

    document.getElementById('scroll-left').addEventListener('click', function() {
        scrollIndex--;
        if (scrollIndex < 0) {
            scrollIndex = totalProducts - visibleProducts; // Loop back to the end
        }
        updateScrollPosition();
    });

    document.getElementById('scroll-right').addEventListener('click', function() {
        scrollIndex++;
        if (scrollIndex > totalProducts - visibleProducts) {
            scrollIndex = 0; // Loop back to the start
        }
        updateScrollPosition();
    });

    function updateScrollPosition() {
        var scrollValue = -(scrollIndex * 100 / visibleProducts); // 33.33% per product slot
        scrollContainer.style.transform = 'translateX(' + scrollValue + '%)';
    }
}

// Call the function to create and insert the widget
createProductRecommendationWidget();

$(document).ready(function () {

    console.log("Page is loaded and ready");

    var cart_items = [];

    const fruits = [
        {
            name: "Country Banana",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDzVKtuWW7gfwqlUfrSTVFeSV8v27B37zVz40-vNa0A&s=10",
            price: 500
        },
        {
            name: "Mango",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnP-Q-nwOkjrljj5cD1inQk9xHMCW_kM6GduaaThOPpw&s=10",
            price: 300
        },
        {
            name: "Pomegranate",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmxy-moZPlJKdIfUL3KDXi9yKiwzXIGtLC_AnKQzGVQ&s=10",
            price: 200
        },
        {
            name: "Guava",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmxy-moZPlJKdIfUL3KDXi9yKiwzXIGtLC_AnKQzGVQ&s=10",
            price: 500
        }
    ];

    const container = document.getElementById("fruit-container");

    fruits.forEach(function (my_fav_fruit) {
        const div = document.createElement("div");
        div.className = "fruit-item";

        div.innerHTML = `
            <img 
                src="${my_fav_fruit.img}" 
                alt="${my_fav_fruit.name}"
                width="250"
                height="150"
            >
            <p>${my_fav_fruit.name}</p>
            <b>RS :<span class="price">${my_fav_fruit.price}</span></b>
            <button class="add_to_cart" id="AddToCart">Add to Cart</button>
        `;

        container.appendChild(div);
    });

    // jQuery event handling for adding items to cart
    $('#fruit-container').on("click", ".add_to_cart", function () {
    console.log("clicked the fruit item");

    let itm = $(this).parent();

    cart_items.push(itm);

    $(this).parent().toggleClass("active");

    $(this).html("Added");

    setTimeout(()=>{

        $(this).html("Add to cart")
        $(this).parent().toggleClass("active");
    },1000)

   

    $('#cart-badge').text(cart_items.length);
});

    $("#disc-btn").click(() => {

        var disc_val = $("#disc-val").val();
        console.log(`disc val is ${disc_val}`);

        $('.fruit-item.active').each((indx, ele) => {
            var txt = $(ele).text();
            var price = $(ele).find(".price").text();
            console.log(`index: ${indx}, price:${price}`);

            var disc_price = price * (100 - disc_val) / 100;
            $(ele).find(".price").text(disc_price);
            $(ele).find(".price").hide().slideDown(800);
        });

        $('#disc-val').val("");

    });

   

});
const product = [
    {
        id: 0,
        image: "images/ristretto.jpg",
        title: "Ristretto",
        price: 1.33,
    },
    {
        id: 1,
        image: "images/espresso.jpg",
        title: "Espresso",
        price: 1.19,
    },
    {
        id: 2,
        image: "images/doppio.jpg",
        title: "Doppio",
        price: 1.33,
    },
    {
        id: 3,
        image: "images/pour-over.jpg",
        title: "Pour Over",
        price: 1.54,
    },
    {
        id: 4,
        image: "images/americano.jpg",
        title: "Americano",
        price: 1.33,
    },
    {
        id: 5,
        image: "images/french-press.jpg",
        title: "French Press",
        price: 1.54,
    },
    {
        id: 6,
        image: "images/peppermint-mocha.jpg",
        title: "Peppermint Coffee",
        price: 1.82,
    },
    {
        id: 7,
        image: "images/mocha.png",
        title: "Café mocha",
        price: 1.82,
    },
    {
        id: 8,
        image: "images/latte.jpg",
        title: "Latte",
        price: 1.82,
    },
    {
        id: 9,
        image: "images/capuccino.jpg",
        title: "Cappuccino",
        price: 1.82,
    },
    {
        id: 10,
        image: "images/caramel-latte.jpg",
        title: "Caramel Latte",
        price: 1.96,
    },
    {
        id: 11,
        image: "images/hot-chocolate.jpg",
        title: "Hot Chocolate",
        price: 1.54,
    },
    {
        id: 12,
        image: "images/white-chocolate.jpg",
        title: "White Chocolate",
        price: 1.68,
    },
    {
        id: 13,
        image: "images/hazelnut-hot-chocolate.jpg",
        title: "Hazelnut Hot Chocolate",
        price: 1.68,
    },
    {
        id: 14,
        image: "images/tea.jpg",
        title: "Tea",
        price: 0.91,
    },
    {
        id: 15,
        image: "images/nescafe.jpg",
        title: "Nescafe",
        price: 1.4,
    },
    {
        id: 16,
        image: "images/moka-pot.jpg",
        title: "Moka Pot",
        price: 1.54,
    },
    {
        id: 17,
        image: "images/coconut-horchata-iced-coffee.jpg",
        title: "Coconut Horchata Iced Coffee",
        price: 1.96,
    },
    {
        id: 18,
        image: "images/iced-coffee.jpg",
        title: "Iced Coffee",
        price: 1.96,
    },
    {
        id: 19,
        image: "images/dalgona.jpg",
        title: "Dalgona",
        price: 1.96,
    },
    {
        id: 20,
        image: "images/iced-latte.jpg",
        title: "Iced Latte",
        price: 1.96,
    },
    {
        id: 21,
        image: "images/iced-caramel-latte.jpg",
        title: "Iced Caramel Latte",
        price: 2.24,
    },
    {
        id: 22,
        image: "images/spanish-iced-latte.jpg",
        title: "Spanish Iced Latte",
        price: 1.96,
    },
    {
        id: 23,
        image: "images/iced-mocha.jpg",
        title: "Iced Mocha",
        price: 1.96,
    },
    {
        id: 24,
        image: "images/iced-white-chocolate-mocha.jpg",
        title: "Iced White Chocolate Mocha",
        price: 1.96,
    },
    {
        id: 25,
        image: "images/iced-hazelnut-chocolate.jpg",
        title: "Iced Hazelnut Chocolate Mocha",
        price: 1.96,
    },
    {
        id: 26,
        image: "images/mango-smoothie.jpg",
        title: "Mango",
        price: 1.96,
    },
    {
        id: 27,
        image: "images/peach-smoothie.jpg",
        title: "Peach",
        price: 1.96,
    },
    {
        id: 28,
        image: "images/strawberry-smoothie.jpg",
        title: "Strawberry",
        price: 1.96,
    },
    {
        id: 29,
        image: "images/mango-peach-smoothie.jpg",
        title: "Mango Peach",
        price: 1.96,
    },
    {
        id: 30,
        image: "images/strawberry-mango-smoothie.jpg",
        title: "Strawberry Mango",
        price: 1.96,
    },
    {
        id: 31,
        image: "images/apple-mango-smoothie.jpg",
        title: "Apple Mango",
        price: 1.96,
    },
    {
        id: 32,
        image: "images/pumpkin-smoothie.jpg",
        title: "Pumpkin",
        price: 1.96,
    },
    {
        id: 33,
        image: "images/iced-tea.jpg",
        title: "Iced Tea",
        price: 1.96,
    },
    {
        id: 34,
        image: "images/mint-lemonade-smoothie.jpg",
        title: "Mint Lemonade",
        price: 1.96,
    },
];

const categories = [...new Set(product.map((items) => items))];

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0,
        total = 0,
        Ltotal = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById("cartItem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0;
        document.getElementById("Ltotal").innerHTML = 0 + " L.L.";
    } else {
        document.getElementById("cartItem").innerHTML = cart
            .map((items) => {
                var { image, title, price } = items;
                total = total + price;
                Ltotal = total * 94700;
                document.getElementById("total").innerHTML =
                    "$ " + total.toFixed(2);
                document.getElementById("Ltotal").innerHTML =
                    Ltotal.toFixed(3) + " L.L.";
                return `
                <div class="cart-item">
                    <div class="row-img">
                        <img class="rowing" src="${image}">
                    </div>
                    <p style="font-size: 12px; color:#333">${title}</p>
                    <h2 style="font-size: 15px; color:#333">$${price}</h2>
                    <i class="fa fa-trash" onclick="delElement(${j++})"></i>
                </div>
            `;
            })
            .join("");
    }
}

// for mini screen to display the dropdown navigation bar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

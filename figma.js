document.addEventListener("DOMContentLoaded", function () {
  let productData;
  if (localStorage.product != null) {
    productData = [];
    productData = JSON.parse(localStorage.product);
  } else {
    productData = [
      {
        url: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Bananas",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "15",
        discount: "20",
      },
      {
        url: "https://images.unsplash.com/photo-1543076659-9380cdf10613?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Oranges",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "20",
        discount: "23",
      },
      {
        url: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Pineapples",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "24",
        discount: "28",
      },
      {
        url: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Apples",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "19",
        discount: "27",
      },
      {
        url: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Cherries",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "21",
        discount: "29",
      },
      {
        url: "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Watermelon",
        description:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor damet sint.",
        price: "11",
        discount: "18",
      },
    ];
  }

  //  Read data
  function read() {
    let card = `<div class="cardAdd">
                <input type="url" id="url" placeholder="Url" />
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="description" placeholder="Description" />
                <input type="number" id="price" placeholder="Price" />
                <input type="number" id="discount" placeholder="Discount" />
                <button id="submit">Add</button>
              </div>`;
    for (let i = 0; i < productData.length; i++) {
      card += `<div class="card">
                <img src="${productData[i].url}" />
                <div class="name">${productData[i].name}</div>
                <div class="description">${productData[i].description}</div>
                <div class="price">$${productData[i].price}</div>
                <div class="discount">$${productData[i].discount}</div>
                <div class="cardButtom">
                  <div class="quantity">
                    <button>-</button>
                    <input type="text" value="1" />
                    <button>+</button>
                  </div>
                  <button class="addToCartBtn">
                    <span class="material-symbols-rounded">add_shopping_cart</span>
                  </button>
                  <button class="updateBtn crudBtn">
                    <span class="material-symbols-rounded">edit_square</span>
                  </button>
                  <button class="delete crudBtn">
                    <span class="material-symbols-rounded">delete</span>
                  </button>
                </div>
              </div>`;
    }
    document.getElementById("cardContainer").innerHTML = card;
  }

  // Clear inputs
  function clear() {
    document.getElementById("url").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
    document.getElementById("discount").value = "";
  }

  document
    .getElementById("cardContainer")
    .addEventListener("click", function (event) {
      if (event.target.id === "submit") {
        let newProduct = {
          url: document.getElementById("url").value,
          name: document.getElementById("name").value,
          description: document.getElementById("description").value,
          price: document.getElementById("price").value,
          discount: document.getElementById("discount").value,
        };

        // Save to local storage
        productData.push(newProduct);
        localStorage.setItem("product", JSON.stringify(productData));

        // Clear inputs
        clear();

        // Read data
        read();
      }
    });

  // Initial read
  read();
});

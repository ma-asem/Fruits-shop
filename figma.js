document.addEventListener("DOMContentLoaded", function () {
  let productData;
  if (localStorage.product != null) {
    productData = JSON.parse(localStorage.product);
  } else {
    productData = [];
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

  document.getElementById("cardContainer").addEventListener("click", function (event) {
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

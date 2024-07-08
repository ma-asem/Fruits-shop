let productData;
if (localStorage.product) {
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

// Initial data write
writeCard();

let index;

function addBtn() {
  // (CRUDS) Create
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
  document.getElementById("url").value = "";
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";

  // write data
  writeCard();
}

function updateBtn() {
  productData[index].url = document.getElementById("url").value;
  productData[index].name = document.getElementById("name").value;
  productData[index].description = document.getElementById("description").value;
  productData[index].price = document.getElementById("price").value;
  productData[index].discount = document.getElementById("discount").value;

  // Save to local storage
  localStorage.setItem("product", JSON.stringify(productData));

  // Clear inputs
  document.getElementById("url").value = "";
  document.getElementById("name").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("discount").value = "";

  document.getElementById("btn").innerHTML = "Add";
  // write data
  writeCard();
}

// (CRUDS) write
function writeCard() {
  let card = `<div class="cardAdd">
                <input type="url" id="url" placeholder="Url" />
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="description" placeholder="Description" />
                <input type="number" id="price" placeholder="Price" />
                <input type="number" id="discount" placeholder="Discount" />
                <button id="btn">Add</button>
                <button id="deleteAll">Delete all</button>
                <div class="deleteAll">
                <button id="delete">Delete</button>
                <button id="cancel">Cancel</button>
                </div>
              </div>`;

  for (let i = 0; i < productData.length; i++) {
    card += `<div class="card" id="card-${i}">
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
                  <button class="updateBtn crudBtn" onclick="updateCard(${i})">
                    <span class="material-symbols-rounded">edit_square</span>
                  </button>
                  <button class="deleteBtn crudBtn" onclick="deleteCard(${i})">
                    <span class="material-symbols-rounded">delete</span>
                  </button>
                </div>
              </div>`;
  }
  document.getElementById("cardContainer").innerHTML = card;

  document.getElementById("btn").addEventListener("click", () => {
    if (document.getElementById("btn").innerHTML == "Add") {
      addBtn();
    } else if (document.getElementById("btn").innerHTML == "Update") {
      updateBtn();
    }
  });

  // Delete buttons
  if (productData.length > 0) {
    document.getElementById("deleteAll").style.display = "inline-block";
  }
  document.getElementById("deleteAll").addEventListener("click", () => {
    document.getElementById("deleteAll").style.display = "none";
    document.getElementById("delete").style.display = "inline-block";
    document.getElementById("cancel").style.display = "inline-block";
  });
  document.getElementById("cancel").addEventListener("click", () => {
    document.getElementById("deleteAll").style.display = "inline-block";
    document.getElementById("delete").style.display = "none";
    document.getElementById("cancel").style.display = "none";
  });
  document.getElementById("delete").addEventListener("click", () => {
    deleteAll();
  });
}
// (CRUDS) Update
function updateCard(i) {
  document.getElementById("url").value = productData[i].url;
  document.getElementById("name").value = productData[i].name;
  document.getElementById("description").value = productData[i].description;
  document.getElementById("price").value = productData[i].price;
  document.getElementById("discount").value = productData[i].discount;

  document.getElementById("btn").innerHTML = "Update";

  index = i;
}

// (CRUDS) Delete
function deleteCard(i) {
  productData.splice(i, 1);
  localStorage.setItem("product", JSON.stringify(productData));
  writeCard();
}

function deleteAll() {
  productData = [];
  localStorage.setItem("product", JSON.stringify(productData));
  writeCard();
}


// (CRUDS) Search
function search(type) {
  document.getElementById("search").addEventListener("keyup", () => {
    for (let i = 0; i < productData.length; i++) {
      if (
        productData[i][type]
          .toLowerCase()
          .includes(document.getElementById("search").value.toLowerCase())
      ) {
        document.getElementById(`card-${i}`).style.display = "block";
      } else {
        document.getElementById(`card-${i}`).style.display = "none";
      }
    }
  });
}

// Choose search type
document.getElementById("menu").addEventListener("change", () => {
  switch (document.getElementById("menu").value) {
    case "name":
      search("name");
      break;
    case "url":
      search("url");
      break;
    case "description":
      search("description");
      break;
    case "price":
      search("price");
      break;
    case "discount":
      search("discount");
      break;
  }
});

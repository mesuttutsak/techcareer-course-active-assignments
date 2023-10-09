function getCategories() {
  axios.get("https://northwind.vercel.app/api/products").then((res) => {
    console.log(res);
    const products = res.data;
    const sortedProducts = products.sort((a, b) => {
        const nameA = a?.name?.toLowerCase();
        const nameB = b?.name?.toLowerCase();
      
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
    

    if (sortedProducts) {
      sortedProducts.forEach((el) => {
        var liElement = document.createElement("li");

        if (el.unitPrice > 50) {
          liElement.style.background = "red";
          liElement.style.color = "white";
        }
        liElement.innerText = `${el.name ? el.name : "İsim Bulunamadı" } - ${(el?.unitPrice && el?.unitPrice !== "undefined" && typeof el?.unitPrice !== null  ) ? el?.unitPrice : "Birim Fiyat Bulunamadı" }`;

        document.querySelector("ul").appendChild(liElement);
      });
    }
  });
}

window.addEventListener("load", (e) => {
  if (e.target.location.pathname.includes("page-1")) {
    getCategories();
  }
});

function addProduct() {
  var name = document.getElementById("name").value;
  var unitPrice = document.getElementById("unitPrice").value;
  var unitsInStock = document.getElementById("unitsInStock").value;

  var newCategory = {
    name,
    unitPrice,
    unitsInStock,
  };

  axios
    .post("https://northwind.vercel.app/api/products", newCategory)
    .then((res) => {
      console.log(res.data);
    });
}

const mahmut = [
  {
    name: "Özgenur",
    unitPrice: 34,
    unitsInStock: 3,
    id: 78,
  },
  {
    name: "okan",
    description: "açıklama ",
    unitsInStock: "2",
    id: 79,
  },
];

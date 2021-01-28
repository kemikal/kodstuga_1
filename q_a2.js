let products = [
    {prodName: "Skor", prodPrice: 499},
    {prodName: "Keps", prodPrice: 299},
    {prodName: "Strumpa", prodPrice: 99},
    {prodName: "Bandana", prodPrice: 1299}
];

class Product {
    constructor(prodName, prodPrice) {
        this.prodName = prodName;
        this.prodPrice = prodPrice;
    }
}

// console.log("orginalet", products.length);

// let saveToJson = JSON.stringify(products);

// console.log("JSON", saveToJson.length);

if (localStorage.getItem("products") == null) {
    localStorage.setItem("products", JSON.stringify(products));
};


// let getFromStorage = localStorage.getItem("products");

//let getProducts = JSON.parse(getFromStorage);

// console.log("Hämtad array", getProducts);

// getProducts.push({prodName: "Väst", prodPrice: 599});

// localStorage.setItem("products", JSON.stringify(getProducts));

function printProducts() {

    document.body.innerHTML = "";

    console.log("printa!");
    let getProducts = JSON.parse(localStorage.getItem("products"));

    console.log(getProducts);

  

    for (product in getProducts) {
        document.body.insertAdjacentHTML("afterbegin", "<br>" + getProducts[product].prodName);
    }
    

};

function addProduct(name, price) {
    
    //let newProduct = {prodName: name, prodPrice: price};
    
    let newProduct = new Product(name, price);
    
    console.log(newProduct);

    let getProducts = JSON.parse(localStorage.getItem("products"));

    getProducts.push(newProduct);
    console.log(getProducts);

    localStorage.setItem("products", JSON.stringify(getProducts));

    printProducts();
}


// let lookForProduct = prompt("Vad letar du efter???");

// let result = products.find(function(a) {return a.prodName == lookForProduct});
// console.log(result);

//     if (result == null) {
//         alert("Hittar ingen sådan!");       
//     } else {
//         alert("Produkten kostar " + result.prodPrice);
//     } 

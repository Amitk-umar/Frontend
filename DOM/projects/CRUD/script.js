const createBtn = document.querySelector('#create')
const formDiv = document.querySelector('.form')
const closedBtn = document.querySelector('#cross')
const form = document.querySelector('form')


const productArr = JSON.parse(localStorage.getItem("products")) || [];

const products = document.querySelector('.products')

let updateIndex = null;
let ui = () => {

    products.innerHTML = "";


    productArr.forEach((elem, index) => {
        products.innerHTML += ` <div class="product-card">
          <div class="img">
            <img
              src="${elem.Image}"
              alt="image"
            />
          </div>
          <div class="text">
            <h4>${elem.productName}</h4>
            <p>description: ${elem.description}</p>
            <p>price: ${elem.price}</p>
          </div>
          <div class="btns">
            <button onclick="updateProduct('${elem.productName}')" id="edit">Update</button>
            <button onclick = "deleteCard(${index})" id="delete">delete</button>
          </div>
        </div>`
    });
}

ui();

createBtn.addEventListener('click', () => {
    formDiv.style.display = 'flex';

})
closedBtn.addEventListener('click', () => {
    formDiv.style.display = 'none';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //e.target = form
    //e.target[0] = first input
    let productName = e.target[0].value;
    let description = e.target[1].value;
    let price = e.target[2].value;
    let Image = e.target[3].value;

    let obj = {
        productName,
        description,
        price,
        Image
    };
    if (updateIndex != null) {
        productArr[updateIndex] = obj;
        updateIndex = null
        localStorage.setItem("products", JSON.stringify(productArr))


    } else {
        productArr.push(obj)
        localStorage.setItem("products", JSON.stringify(productArr))
    }

    if (productName.trim() === "" || description.trim() === "" || price.trim() === "" || Image === "") {
        alert("required all field!")
        return;
    }

    ui();
    // console.log(productArr);
    form.reset();
    formDiv.style.display = 'none';



})


const updateProduct = (name) => {
    formDiv.style.display = "flex";
    let product = productArr.find((elem) => elem.productName === name);
    updateIndex = productArr.findIndex((elem) => elem.productName === name);
    form[0].value = product.productName;
    form[1].value = product.description;
    form[2].value = product.price;
    form[3].value = product.Image;
}
const deleteCard = (index) => {
    productArr.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(productArr))

    ui();
}



// localStorage.setItem("name","Ravi sharma")
// let localName = localStorage.getItem("name")
// console.log(localName);


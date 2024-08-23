let listProduct = ["Nokia A7" ," Iphone 15 promax", "SamSung Note 10" , "Xiaomi M10"];


function showlistProduct() {
    let text = "";
    listProduct.forEach((item,index) =>  {
        text += "<tr>";
        text += "<td>";
        text += index + 1;
        text += "</td>";
        text += "<td>";
        text += item;
        text += "</td>";
        text += "<td>";
        text += `<button class="btn-delete" onclick="deleteProduct(${index})" >Delete</button>`;
        text += `<button class="btn-update" onclick="updateProduct(${index})" >Update</button>`;
        text += "</td>";
        text += "</tr>";
    })
    document.getElementById("list-product").innerHTML = text;
}
showlistProduct();

function addProduct() {
    let nameProduct = document.getElementById("name-Product").value;
    if (nameProduct) {
        listProduct.push(nameProduct);
        showlistProduct();
        document.getElementById("name-Product").value = "";
    } else {
        alert("làm ơn thêm product vào ")
    }
}

function deleteProduct(index) {
    if (confirm("bạn có muốn xoá hay không"))
    listProduct.splice(index,1);
    showlistProduct();
}

function updateProduct(index) {
    let product = listProduct[index];
    document.getElementById("name-Product").value = product;
    document.getElementById("id-product").value = index;
}

function editProduct() {
    let index =  document.getElementById("id-product").value;
    let nameProduct = document.getElementById("name-Product").value;
    listProduct[index] = nameProduct;
    showlistProduct();
}




/*
let x = luu;
let message = "xin chao: " + x;
//su dung string literal
let name = Luu;
let message1  = `xin chao ${name}`;*/

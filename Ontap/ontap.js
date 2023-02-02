

const productList = [];

let productDiv = document.querySelector(".product");
var show = document.querySelector(".show");

const showProduct = () => {
    if(productList.length == 0  ){
        show.innerHTML = "không có sản phẩm để hiển thị";
      }else{
        for(let item of productList){
            show.innerHTML += `
            <h2>${item}</h2>
        `;  
    }
      }
 
}

productDiv.onclick = function(){
 showProduct();
}
var add = document.querySelector("#add");
add.onclick = function(){
    addProduct();
}
const addProduct = () =>{
      var x ;
      x = prompt("Mời nhập thêm");
      if(x.length <= 5){
       x = prompt("Tên cần nhỏ hơn 5 ký tự");
        productList.push(x);
 }else{
        productList.push(x);
      }
}
var delete1 = document.querySelector("#delete1");
delete1.onclick = function(){
      removeProduct();
}
const  removeProduct = () =>{
     var y = prompt("Nhập tên cần xóa");
     if(productList.includes(y) == true){
   
        let xoa = productList.filter(function(element){
            return element != y;
          });
         delete productList[productList.indexOf(y)];
         show.innerHTML += `
         <h2>${xoa}</h2>
     `;  
     }else{
        console.log("Không tìm thấy sản phẩm cần xóa");
     }
}

var update = document.querySelector("#update");
update.onclick = function(){
  updateProduct();
}
const  updateProduct  = () => {
  var z = prompt("Nhập tên cần sửa");
  if(productList.includes(z) == true){
    var t = prompt("Sửa thành ? ");
    productList[productList.indexOf(z)] = t;
    showProduct();
  }else{
     console.log("Không tìm thấy sản phẩm cần sửa");
  }
}
 var reset = document.querySelector("#reset");
 reset.onclick = function(){
  removeAllProduct();
}
 const removeAllProduct = () => {
    productList.length = 0;
    showProduct();
 }
/*
 - var let const 
 - hoisting 
 - template string 
 - function - default template 
 -arrow function   const demo = (a,b) => a + b;
var sẽ lưu được mãi mãi , let chỉ luu đc trong 1 nhóm (biến cục bộ ), const là biến không thể thay đổi
*/
//var product = 'iphone';
//console.log(product);
/*
- hàm có tham số và không có return 
- hàm co tham số và có return 
- hàm ko có tham số và không có return
- hàm ko có tham số và có return
tham số : giống như biến , đc truyền vào khi khởi tạo hàm
đối số  : giá trị tryền vào hàm khi gọi ra hàm thực thi , giá trị mặc định sum(a=10,b=20)  
*/
function sum(a,b){

    let sum = a + b;
    console.log(sum);
    return sum;
    // return là trả về giá trị
}
let sum1 = sum(12,32);
console.log(sum1);
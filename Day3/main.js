 'use strict';
/*
   Chế độ nghiêm ngặt
   tránh vc khai báo biến không có tù khóa
   tránh trùng tham số khi dùng hàm 
   chặt chẽ hơn trong phạm vi hoatj động
   tránh đặt tên biến trùng từ  khóa
*/ 

const product = [
    'apple',
    'xiaomi',
    'samsung'
]
 const [apple,xiaomi] = product;
 console.log(apple,xiaomi);
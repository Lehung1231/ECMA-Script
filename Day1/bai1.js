var login = document.getElementById('button');
var email = document.getElementById('id-text');
var pass = document.getElementById('id-pass');
var repass = document.getElementById('id-repass');
login.onclick = function(){
   if(email.value == ""){
    alert("Email không được để trống ");
   }else if(pass.value == ""){
    alert("Pass không được để trống ");
   }else if(pass.value <= 8){
    alert("Pass phải lớn hơn 8 ");
   }
}

var userEmail=document.getElementById('useremail-1');
var userPass=document.getElementById('userpass-1');
var btn=document.getElementById('btn-log');
var error=document.querySelector('.error');
btn.addEventListener('click',function(){
    add();
})
 var users=[];
users=JSON.parse(localStorage.getItem('users') );
console.log(users);


function add(){
 if(check()){
    var x=false;
    for(var i=0;i<users.length ;i++){
        if(userEmail.value==users[i].email &&userPass.value==users[i].pass){
            x=true;
            var y=users[i].name;
            localStorage.setItem('username',y);
            window.location.href='index2.html';
            break;
    
        }
       
        if(!x) {
            document.querySelector('.log-1').classList.replace('d-none', 'd-block');
        }
    }
  
 }
 }









function check(){
    if(userEmail.value==''||userPass.value==''){
        error.classList.replace('d-none','d-block');
        return false;
    }
    else{
        error.classList.replace('d-block','d-none');
        return true;
    }
}


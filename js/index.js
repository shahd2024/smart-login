
// the best   -------
var allUser=[];
if(localStorage.getItem('users')==null){
allUser=[];
}
else{
    allUser=JSON.parse(localStorage.getItem('users'))
}
var username=document.getElementById('username');
var useremail=document.getElementById('useremail');
var userpass=document.getElementById('userpass');
var error=document.querySelector('.error');
var exit=document.querySelector('.exit');
var btn=document.getElementById('btn-sum');
btn.addEventListener('click',function(){
    addUser();
})
useremail.addEventListener('input',function(){
    validation(this);
})
userpass.addEventListener('input',function(){
    validation(this);
})
useremail.addEventListener('input',function(){
    existing();
})

function addUser() {
   if(check() && validation(useremail)&& validation(userpass)&& existing()=='true'){
    var user={
        name:username.value,
        email:useremail.value,
        pass:userpass.value,
    }
    allUser.push(user);
    localStorage.setItem('users',JSON.stringify(allUser));
    clear();
 
    document.querySelector('.sucess').classList.replace('d-none','d-block');
   setTimeout(function(){
     window.location.href='index1.html'
   },1000);
    console.log('done');
   }
   
    
    
}
function check(){
    if(username.value==''||useremail.value==''||userpass.value==''){
        error.classList.replace('d-none','d-block');
        return false;
    }
    else{
        error.classList.replace('d-block','d-none');
        return true;
    }
}
function validation(elem){
    var regex={
        useremail:/[a-z]{3,}\@(gmail)(.com)/,
        userpass:/[a-z]{3,8}[0-9]{4,8}/
    }
    if(regex[elem.id].test(elem.value)){
        elem.classList.add('is-valid');
                 elem.classList.remove('is-invalid');
                 elem.nextElementSibling.classList.replace('d-block','d-none')
                return true;

    }
    else{
        elem.classList.add('is-invalid');
                 elem.classList.remove('is-valid');
                 elem.nextElementSibling.classList.replace('d-none','d-block')
                 return false;
    }
}
function clear(){
    username.value=='';
    useremail.value=='';
    userpass.value=='';
}
function existing() {
    var x='true'
    for (let i = 0; i < allUser.length; i++) {
       if(useremail.value==allUser[i].email){
        x='false';
        exit.classList.replace('d-none','d-block');
        console.log('error');
        
        break;
       }
       else{
        exit.classList.replace('d-block','d-none');
       }
        
    }
    return x;
    
}





const button=document.querySelector('.btn-signIn');
const email=document.querySelector('.mail').Value;
const validation=(email)=>{
if(email===null){
    alert("please enter your email");
    return false;
}
 }
 validation(email);
button.addEventListener("click",(e)=>{
   e.preventDefault();
    window.location.href = './user/home.html';

    
})

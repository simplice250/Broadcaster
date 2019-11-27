

const validation=(x)=>{

    if(x.value.length===0){
    console.log(x.value);
    return false;
    }else{
        return true;
}
 }
 
 const email=document.querySelector('.mail');
  const button=document.querySelector('.btn-signIn');
 console.log(email.value.length);

 button.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validation(email)===true){
    window.location.href = './user/home.html';
    return true;
    }else{
        alert("please enter your email");
    }

     
 });
 

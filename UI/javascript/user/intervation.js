// eslint-disable-next-line no-unused-vars
let map;
// eslint-disable-next-line no-unused-vars
function initMap() {
  // eslint-disable-next-line no-undef
  map = new google.maps.Map(document.querySelector('.map'),
    { center: { lat: -34.397, lng: 150.644 }, zoom: 8 });
}

window.onclick = function a(event) {
  if (!event.target.matches('#dropdown')) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('#dropdown')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 
 function myFunction1(){
   document.getElementById("myDropdown").classList.toggle("show");
}
function myFunction2(e){
  e.preventDefault();
   document.getElementById("myDropdown1").classList.toggle("show1");
}
function myFunction(x) {
 x.classList.toggle("change");
  
}


document.querySelector('.btn-create').addEventListener("click",(e)=>{
  e.preventDefault();
  console.log(e);
  myFunction1();
});

const update=document.querySelector('#update');

update.addEventListener("click",(e)=>{
   e.preventDefault();
    window.location.href = '../../HTML/user/home.html';

    
})
const cancel=document.querySelector('.cancel');
cancel.addEventListener("click",(e)=>{
   e.preventDefault();
    window.location.href = '../../HTML/user/home.html';

    
})



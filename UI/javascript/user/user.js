       var map;
      function initMap() {
        map = new google.maps.Map(document.querySelector('.map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });}

     
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
function myFunction2(){
   document.getElementById("myDropdown1").classList.toggle("show1");
}
function myFunction(x) {
  x.classList.toggle("change");
  myFunction2();
}
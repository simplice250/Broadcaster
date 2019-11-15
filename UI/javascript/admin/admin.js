   
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
 

function myFunction2(){
   document.getElementById("myDropdown1").classList.toggle("show1");
}
function myFunction(x) {
  x.classList.toggle("change");
  myFunction2();
}
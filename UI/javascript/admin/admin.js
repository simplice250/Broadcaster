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
// eslint-disable-next-line no-unused-vars
function myFunction2() {
  document.getElementById('myDropdown1').classList.toggle('show1');
}
// eslint-disable-next-line no-unused-vars
function myFunction(x) {
  x.classList.toggle('change');
  myFunction2();
}
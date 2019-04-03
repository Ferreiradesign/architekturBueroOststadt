let navStatus = false;

function onLoaded() {
  function toggleMenu(){
    var btn = document.getElementById('mobiletoogle');
    var menu = document.querySelector(".menuClass");

    if (navStatus = true) {
      menu.style.height="0";
      console.log('a');
      navStatus = false;
    } else {
      menu.style.height="auto";
      console.log('b');
      navStatus = true;
    }
  }
  document.getElementById('mobiletoogle').addEventListener('click',toggleMenu);
}
document.addEventListener('DOMContentLoaded',onLoaded);

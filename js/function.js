let navStatus = false;

function onLoaded() {
  function toggleMenu(){
    let btn = document.querySelector(".mobileBTN"),
        menu = document.querySelector('.menuClass');
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
  btn.addEventListener('click',toggleMenu);
}
document.addEventListener('DOMContentLoaded',onLoaded);

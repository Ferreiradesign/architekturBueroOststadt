let navStatus = false;
function onLoaded() {

  //Fixed navigation
  let nav = document.querySelector("nav.navPage");
  let magi = document.querySelector("section.blog");
  let topOfNav = nav.offsetTop;
  function fixNav() {
    if (window.scrollY > topOfNav) {
      document.body.classList.add("fixed");
      magi.style.paddingTop = nav.offsetHeight + "px";
    } else {
      document.body.classList.remove("fixed");
      magi.style.paddingTop = 0;
    }
  }
  window.addEventListener('scroll',fixNav);

  //navigation toggle
  let navToogle = document.querySelector(".mobileBtn");
  let getNavList = document.querySelector("ul.menuClass");
  function toogleNav() {
    if (navStatus == true) {
      getNavList.style.height='0';
      navStatus = false;
    }else {
      getNavList.style.height='auto';
      navStatus = true;
    }
  }
  navToogle.addEventListener('click',toogleNav);
}
document.addEventListener('DOMContentLoaded',onLoaded);

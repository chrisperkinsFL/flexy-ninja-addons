function openNav() {
  document.getElementById("menu").style.display = "block";

  //remove the hambuger menu icon
  let openIcon = document.getElementById("nav-icon-open");
      openIcon.classList.remove("open")
      openIcon.classList.add("close");

  //add the 'x' icon
  let closeIcon = document.getElementById("nav-icon-close");
      closeIcon.classList.remove("close");
      closeIcon.classList.add("open");
}

function closeNav() {
  document.getElementById("menu").style.display = "none";
  
  //add the hamburger menu icon
  let openIcon = document.getElementById("nav-icon-open");
      openIcon.classList.remove("close")
      openIcon.classList.add("open");

  //remove the 'x' icon
  let closeIcon = document.getElementById("nav-icon-close");
      closeIcon.classList.remove("open")
      closeIcon.classList.add("close");
}


const menuBtn= document.querySelector('.menu-btn');
const closeBtn= document.querySelector('.close-btn');
let showMenu= false;

menuBtn.addEventListener('click', function() {
   if(!showMenu) { 
    menuBtn.classList.add("menu-btn-open");
    document.getElementById("main-nav").classList.add("main-nav-open");
    showMenu = true;
    } else {
        menuBtn.classList.remove("menu-btn-open");
        document.getElementById("main-nav").classList.remove("main-nav-open");
        showMenu = false;
    }
})

closeBtn.addEventListener('click', function() {
    closeBtn.style.display= "none";
    menuBtn.style.display= "block";
    document.getElementById("main-nav").style.display= "none";
    menuBtn.classList.remove('open');
})
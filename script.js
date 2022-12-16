let sidebar = document.querySelector('#sidebar');
let hamburger = document.querySelector('.hamburger');

function openHamburger(){
    if(sidebar.classList.contains('active')){
        sidebar.classList.remove('active');
        hamburger.classList.remove('open');
    }else{
        sidebar.classList.add('active');
        hamburger.classList.add('open');
    }
}
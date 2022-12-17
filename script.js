//This is code open hamuburger item and you can see the contents
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
// END HERE hamburger

//HERE GONNA BE LIKE WHEN YOU NAVIGATE TO BUTTON IT'S GONNA BE BIGGER, 
//AND WHEN YOU OUT THIS BUTTON IT GONNA BE A SMALL
function big(element){
    element.style.fontSize = "50px";
}

function small(element){
    element.style.fontSize = "40px";
}
// END HERE BIG SMALL

function change(element){
    let a = element.innerHTML;
    switch(a){
        case "-Almaty 'SDU-Store'-":
            document.getElementById("map").src="./images/almaty.png";
            document.getElementById("slogan").innerHTML="Almaty, Mametova 47 & Rozybakieva 247a, SDU-Store(Suleyman Demirel University)";
            document.getElementById("number").innerHTML="+7-747-189-56-16 || +7-778-948-98-00";
            break;
        case "-Astana-":
            document.getElementById("map").src="./images/astana.png";
            document.getElementById("slogan").innerHTML="Astana, Uly Dala 7/7 & Qabanbai Batyr 62";
            document.getElementById("number").innerHTML="+7-777-062-13-09 || +7-747-189-56-16";
            break;
        case "-Shymkent-":
            document.getElementById("map").src="./images/shym.png";
            document.getElementById("slogan").innerHTML="Shymkent, Tauke khan 43a";
            document.getElementById("number").innerHTML="+7-747-189-56-16 || +7-778-948-98-00";
            break;
        case "-Aqtau-":
            document.getElementById("map").src="./images/aqtau.png";
            document.getElementById("slogan").innerHTML="Aqtau, 17 mkr. 95";
            document.getElementById("number").innerHTML="+7-778-546-07-83 || +7-747-189-56-16";
            break;    
        case "-Aqtobe-":
            document.getElementById("map").src="./images/aqtobe.png";
            document.getElementById("slogan").innerHTML=" Aqtobe, Mametova 4";
            document.getElementById("number").innerHTML="+7-777-70-78 || +7-747-189-56-16";
            break;    
    }
}
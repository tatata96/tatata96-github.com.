
var home = document.getElementById('h');
var homeD = document.querySelector('.home');
var about = document.getElementById('a');
var aboutD = document.querySelector('.about');
var work = document.getElementById('w');
var workD = document.querySelector('.work');
var contact = document.getElementById('c');
var contactD = document.querySelector('.contact');

aboutD.style.display = "none";
workD.style.display = "none";
contactD.style.display = "none";



home.onclick = () => {
    aboutD.style.display = "none";
    homeD.style.display = "initial";
    workD.style.display = "none";
    contactD.style.display = "none";


}

about.onclick = () => {
    aboutD.style.display = "initial";
    homeD.style.display = "none";
    workD.style.display = "none";
    contactD.style.display = "none";

}

work.onclick = () => {
    aboutD.style.display = "none";
    homeD.style.display = "none";
    workD.style.display = "initial";
    contactD.style.display = "none";

}

contact.onclick = () => {
    console.log(contactD);
    contactD.style.display = "initial";

    aboutD.style.display = "none";
    homeD.style.display = "none";
    workD.style.display = "none";
}

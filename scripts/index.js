//EVENT HOVER SUR LES BOUTONS ADVERSAIRES
var btnAdversaire = document.getElementsByClassName('btnAdversaire');
for (let i = 0; i < btnAdversaire.length; i++) {
    btnAdversaire[i].addEventListener('mouseover', () => {
        btnAdversaire[i].style.backgroundColor = '#b11313';
        btnAdversaire[i].style.color = 'white';
        btnAdversaire[i].style.fontWeight = 'bold';
        btnAdversaire[i].style.boxShadow = '5px 5px 20px white'
    })
    btnAdversaire[i].addEventListener('mouseleave', () => {
        btnAdversaire[i].style.backgroundColor = 'white';
        btnAdversaire[i].style.color = '#b11313';
        btnAdversaire[i].style.boxShadow = 'none';
    })

}

//Fonction du Timer
var countDownDate = new Date("May 4, 2022 08:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var timer = document.getElementById('timer');
    timer.innerText = days + ' days   ' + hours + ' h ' + minutes + ' m ' + seconds + ' s';

    if (distance < 0) {
        clearInterval(x);
        timer.innerText = 'EXPIRED';

    }
}, 1000)


//EVENT HOVER SUR L'HEADER
var lienHeader = document.querySelectorAll('li');
for (let i = 0; i < lienHeader.length; i++) {
    lienHeader[i].addEventListener('mouseover', () => {
        lienHeader[i].style.textDecoration = 'line-through';
    })
    lienHeader[i].addEventListener('mouseleave', () => {
        lienHeader[i].style.textDecoration = 'none';
    })
}

//EVENT HOVER SUR ICONE RESEAUX SOCIAUX FOOTER
var iconeFooter = document.getElementsByClassName('icone-footer');
for (let i = 0; i < iconeFooter.length; i++) {
    iconeFooter[i].addEventListener('mouseover', () => {
        iconeFooter[i].style.color = 'white';
    })
    iconeFooter[i].addEventListener('mouseleave', () => {
        iconeFooter[i].style.color = 'black';
    })
}
var titreH = document.querySelectorAll('h1');
console.log(titreH)


$(document).ready(function() {
    //ANIMATION FADEIN DE TOUS LES TITRES AVEC LA FONT FAR-FROM-HOME-COMING ET LE SOUS TITRE
    $('h1').animate({ left: '5px' }, 6000);
    $('.description').fadeIn(6000);
    $('h3').fadeIn(6000);
});
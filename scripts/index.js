var btn2 = document.getElementById('btn');

function myFunction() {
    btn2.style.backgroundColor = '#fff'
    btn2.style.color = '#b11313'
}

function myFunction2() {
    btn2.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    btn2.style.color = '#fff'
}
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


document.getElementById('para').innerHTML = "<B>1225225</B>"
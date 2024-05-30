var liczbaRandom = 0;
var dlugoscSlowa;
var podanaLiczba;
//zmienne zapisujące wpisany przez wyraz
var checkSlowo = document.querySelector('input[type=text]');
var slowo = checkSlowo.value.length;

//zmienne zapisujące wpisaną przez usera liczbe liter
var checkLiczba = document.querySelector('input[type=number]');
var liczba = checkLiczba.value;

setInterval(function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    var clockTime = hours+":"+minutes+":"+seconds;
    document.getElementById('clock');
    clock.innerText = clockTime;
},1000
)

//zmienne przypisane do przycisków
var save = document.querySelector('input[type=button][id=save]');
var check1 = document.querySelector('input[type=button][id=check1]');
var check2 = document.querySelector('input[type=button][id=check2]');
var generator = document.querySelector('input[type=button][id=generator]');

document.getElementById('wylosowanaLiczba').innerHTML = "";

//funkcja losująca liczbe przy nakliknięciu
generator.onclick = function(){
    liczbaRandom = Math.floor((Math.random()* 5) +1);
    document.getElementById("wylosowanaLiczba").innerHTML = liczbaRandom;
}

//funkcja licząca ilośc znaków w wyrazie (Save)
document.getElementById("save").onclick = function(event){
    dlugoscSlowa = document.getElementById('podaneSlowo').value.length;
}

//funkcja sprawdzajaca wprowadzona liczba (check1)
document.getElementById("check1").onclick = function(event){
    podanaLiczba = document.getElementById('podanaLiczba').value;
    if (dlugoscSlowa == podanaLiczba) {
        alert("Dobrze!!!")
    }
    else {
        alert("źle")
    } 
}

//funkcja sprawdzająca czy liczba wprowadzona == liczbie wygenerowanej

document.getElementById("check2").onclick = function(event){
    if (liczbaRandom == dlugoscSlowa){
        myMove();
        alert("wygrałeś x2")
    }
    else {
        alert("No niestety nie wyszło")
    }
}

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
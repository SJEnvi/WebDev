//Moje 3 zmienne( 2 składowe i suma)
var liczba1;
var liczba2;
var suma;

 


//Wstepnie ustawiam wyniki na puste pola
document.getElementById('wynik1').innerHTML = "";
document.getElementById('wynik2').innerHTML = "";


//zmienne zapisujące wpisany przez usera wynik sumy
var checkAnswer = document.querySelector('input[type=text]');
var value = checkAnswer.value;
//tworze dodatkowe zmienne, do odczytywania akcji użytkownika
var btn = document.querySelector('input[type=button][value=Check]');
var btn1 = document.querySelector('input[type=button][id=liczba1]');
var btn2 = document.querySelector('input[type=button][id=liczba2]');



//funkcje które po nakliknięciu przycisku losują liczby i nadpisują sume
btn1.onclick = function(){
    liczba1 = Math.floor((Math.random()* 29) +1);
    suma = liczba1 + liczba2;
    document.getElementById("wynik1").innerHTML = liczba1;
}

btn2.onclick = function(){
    liczba2 = Math.floor((Math.random()* 29) +1);
    suma = liczba1 + liczba2;
    document.getElementById("wynik2").innerHTML = liczba2;
}

function myFunction() {
    document.body.style.background = "#f3f3f3 url('lotto2_pliki/congrats.jpg')";
  }


//funkcja która po nakliknięciu przycisku sprawdza czy suma podana przez usera się zgadza i informuje o wygranej
btn.onclick = function(){
    value = checkAnswer.value;
    if (value == suma && suma > 50){
        myFunction();
        alert('Wygrałeś główną nagrodę!!!!');
        
    }
    else if (value == suma)
    {
        alert('Wygrałeś!')
    }
    else {
        alert('Zjebałeś!')
        }
    }

   
function sprawdz(){
    const Wynik = Math.floor(Math.random() * 100) + 1;
    const wynikK = document.getElementById('wynik');
    wynikK.textContent = `Prawdopodobieństwo, że się spełni: ${Wynik}%`
    if (Wynik >= 1 && Wynik <= 33){
        wynikK.className = 'red';
    }
    else if (Wynik >= 34 && Wynik <= 66){
        wynikK.className = 'blue';
    }
    else {
        wynikK.className = 'green';
    }
}
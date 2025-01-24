function znajdz(){
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const liczba3 = parseFloat(document.getElementById('liczba3').value);

    if (isNaN(liczba1) || isNaN(liczba2) || isNaN(liczba3)){
        document.getElementById('wynik').innerText = 'Napisz wsystkie liczby';
        return;
    }

    const minValue = Math.min(liczba1, liczba2, liczba3);
    const maxValue = Math.max(liczba1, liczba2, liczba3);
    document.getElementById('wynik').innerText = `Najmniejsza liczba: ${minValue}, Największa liczba: ${maxValue}`;
}
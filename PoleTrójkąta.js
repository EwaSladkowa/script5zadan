function poleTrojkata(a, b, c){
    if ((a + b >c) && (a + c > b) && (b + c > a)){
        const p = (a + b +c)/2;
        const pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        return pole.toFixed(2);
    }
    else{
        return null;
    }
}
function oblicz() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const wynik = poleTrojkata(a, b, c);
    const wynikK = document.getElementById('wynik');

    if (wynik){
        wynikK.textContent = `Pole Trójkąta: ${wynik}`;
    }
    else {
        wynikK.textContent = 'Z podanych boków nie sposób utworzyć trójkąta'
    }
}
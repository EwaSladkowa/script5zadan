function zamien(){
    const mord = document.getElementById('mord').value;
    const fustang = document.getElementById('fustang').value;

    if (mord.length > 0 && fustang.length > 0) {
        const newmord = fustang[0] + mord.slice(1);
        const newfustang = mord[0] + fustang.slice(1);
        document.getElementById('wynik').textContent = `wynik: ${newmord} ${newfustang}`;
    }
    else{
        document.getElementById('wynik').textContent = 'Proszę wprowadzić oba wyrazy';
    }
}
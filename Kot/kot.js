function doMeow(){
    var znaki = document.getElementById('kot').value;
    const gifkot = document.getElementById('gifkot');
    const meowkot = document.getElementById('meowkot');
    if (znaki.length >= 6 && znaki.endsWith("kot")){
        meowkot.textContent = '';
        meowkot.textContent = 'Meow!';
        gifkot.style.display = 'block';
    }
    else {
        meowkot.textContent = 'Za mało znaków lub wyraz nie koczy się napisem "kot"';
        gifkot.style.display = 'none';
    }
}

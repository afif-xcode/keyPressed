'use strict'

document.addEventListener('keydown',function(e){
    console.log(e);
    const keyPressed =e.key;
    console.log(keyPressed); 
    const code = e.keyCode;
    console.log(code);
    const keycode = document.querySelector('.key-code');
    console.log(keycode);
    keycode.textContent=code;
    const keypress = document.querySelector('.key-pressed');
    console.log(keypress);
    keypress.textContent=keyPressed;
})


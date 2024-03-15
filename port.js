// Selecciona los botones del DOM
const btnSkill = document.querySelector("#btn-skills");
const btnInfo = document.querySelector("#btn-info-sobre-mi");

// Selecciona los elementos de habilidades del DOM
let itemSkills = document.querySelectorAll('.relleno');

// Añade un escuchador de eventos al botón 'btnSkill'
btnSkill.addEventListener('click',function(){
    // Oculta la sección 'info-sobre-mi' y muestra la sección 'info-skills' cuando se hace clic en 'btnSkill'
    document.querySelector('#info-sobre-mi').style.display = 'none';
    document.querySelector('#info-skills').style.display = 'block';

    // Actualiza la clase de los botones para reflejar el estado seleccionado
    btnInfo.classList.remove('selected');
    btnSkill.classList.add("selected");

    // Añade animaciones a los elementos de habilidades
    itemSkills[0].style.animation = 'animHtml 2s forwards';
    itemSkills[1].style.animation = 'animCss 2s forwards';
    itemSkills[2].style.animation = 'animJs 2s forwards';
    itemSkills[3].style.animation = 'animReact 2s forwards';
    itemSkills[4].style.animation = 'animBoostrap 2s forwards';
});

// Añade un escuchador de eventos al botón 'btnInfo'
btnInfo.addEventListener('click',function(){
    // Muestra la sección 'info-sobre-mi' y oculta la sección 'info-skills' cuando se hace clic en 'btnInfo'
    document.querySelector('#info-sobre-mi').style.display = 'block';
    document.querySelector('#info-skills').style.display = 'none';

    // Actualiza la clase de los botones para reflejar el estado seleccionado
    btnInfo.classList.add('selected');
    btnSkill.classList.remove("selected");
});

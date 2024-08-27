// Funcion que inserta el simbolo seleccionado al presionar el boton
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

// Funcion que limpia completamente la pantalla 
function clean()
{
    document.getElementById('resultado').innerHTML = "";
} 

// Funcion que borra lo ultimo que algrego el usuario a la pantalla
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}


// Funcion que realiza las operaciones que el usuario pone en la pantalla
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
// Funcion unicamente para la operación de la raiz cuadrada
function sqrt() {
    let currentValue = document.getElementById("resultado").innerText;
    let sqrtValue = Math.sqrt(parseFloat(currentValue));
    document.getElementById("resultado").innerText = sqrtValue;
}


// Función para alternar entre modo oscuro y claro
function toggleMode() {
    const body = document.body;
    const calculadora = document.querySelector('.calculadora');
    const botones = document.querySelectorAll('.boton');
    
    // Alternar clases en el body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Alternar clases en la calculadora
    calculadora.classList.toggle('dark-mode');
    calculadora.classList.toggle('light-mode');

    // Alternar clases en los botones
    botones.forEach(boton => {
        boton.classList.toggle('dark-mode');
        boton.classList.toggle('light-mode');
    });

    // Cambiar la imagen del botón según el modo activo
    const img = document.getElementById('modo-icon');
    if (body.classList.contains('dark-mode')) {
        img.src = 'images/moon.jpg'; // Imagen para modo oscuro
    } else {
        img.src = 'images/sun.jpg'; // Imagen para modo claro
    }
}

// Inicializar el modo claro al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('light-mode');
    const calculadora = document.querySelector('.calculadora');
    const botones = document.querySelectorAll('.boton');

    calculadora.classList.add('light-mode');
    botones.forEach(boton => {
        boton.classList.add('light-mode');
    });
});





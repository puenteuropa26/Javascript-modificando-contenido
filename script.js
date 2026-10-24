const botonTema = document.getElementById('botonTema');
const carta = document.getElementById('carta');
const selectorIdioma = document.getElementById('idioma');

let temaActivo = false;

// Objeto con todas las traducciones enlazadas al ID de cada elemento HTML
const traducciones = {
    es: {
        textos: {
            "titulo-pestana": 'Los expertos en ciberseguridad coinciden: "En las contraseñas, la longitud es más importante que la complejidad"',
            "etiqueta-idioma": 'Elige un idioma:',
            "opcion-es": 'Español',
            "opcion-en": 'Inglés',
            "botonTema": 'Cambiar tema',
            "titulo-principal": 'Los expertos en ciberseguridad coinciden: "En las contraseñas, la longitud es más importante que la complejidad"',
            "parrafo-autor": 'Escrito por: <b>Nacho Gómez González</b>',
            "parrafo-fecha": 'A fecha de: <b>4 de octubre del 2026</b>',
            "parrafo-1": 'En un mundo cada vez más digitalizado, las contraseñas se han convertido en las llaves para abrir las puertas de nuestra identidad digital. Sin embargo, parece que este mensaje todavía no se ha extendido de lleno en nuestra sociedad, ya que la gran mayoría de usuarios sigue cometiendo errores y usando contraseñas muy débiles.',
            "parrafo-2": 'Según los datos de Verizon, alrededor del 86% de los ciberataques que se producen en el mundo a aplicaciones web utilizan credenciales robadas. Esto demuestra que el método más efectivo y popular se basa en el robo de contraseñas.',
            "parrafo-3": 'Por esa razón, en los últimos años, las plataformas, servicios y aplicaciones han introducido nuevas medidas de seguridad y han reforzado las existentes, por ejemplo, la introducción de los identificadores biométricos (huella dactilar o reconocimiento facial). Pero también la llegada de contraseñas extremadamente largas incluso de hasta 16 caracteres o más.',
            "parrafo-4": 'Existen los generadores de claves automáticos, los cuales te ofrecen códigos muy complejos y casi imposibles de recordar, pero cada vez más empresas de ciberseguridad están apostando por contraseñas de entre 14 y 16 caracteres, que no tienen por qué mezclar letras, números y símbolos.',
            "parrafo-5": 'Esto se debe a que según la psicología, la memoria de trabajo tiene una capacidad limitada de aproximadamente cuatro "bloques" a la vez. Esto significa que es más fácil recordar una contraseña de entre 14 y 16 caracteres si se compone de entre tres y cinco bloques fáciles de recordar.',
            "parrafo-6": 'A su vez, según el servicio de gestión de contraseñas Bitwarden, un hacker tardaría siglos en descifrar mediante fuerza bruta una contraseña de 16 caracteres que combinara distintos tipos de caracteres.',
            "subtitulo-crear-clave": 'Cómo crear una contraseña fácil de recordar que sea realmente segura',
            "parrafo-7": 'La mayoría de contraseñas son de 8 caracteres pero, en una época en la que surgen nuevas amenazas de piratería informática, crear contraseñas más largas es más seguro y necesario.',
            "parrafo-8": 'Las contraseñas más largas son más difíciles de descifrar, pero también más difíciles de recordar. Una de las mejores formas de solucionar esto es crear una frase de contraseña en lugar de una sola palabra, ya sea una frase corta, un dicho, la estrofa de una canción o lo que te ayude a recordarlo.',
            "parrafo-9": 'Si encima separas cada palabra con números o símbolos, tu clave será todavía más complicada de adivinar y robar. Este método es especialmente útil contra los ataques de fuerza bruta, que consiste en probar las palabras más usadas en contraseñas para robar claves.',
            "subtitulo-herramientas": 'Herramientas que te pueden ayudar',
            "parrafo-10": 'Existen varias herramientas confiables y gratuitas para verificar la seguridad de tu contraseña.',
            "parrafo-11": 'Estas plataformas evaluan la fortaleza analizando la longitud, complejidad y patrones. Estimando el tiempo que tardaria un atacante en descifrarla mediante fuerza bruta.',
            "seccion-privacidad": 'Privacidad y Procesamiento',
            "parrafo-bitwarden": '<b>Bitwarden</b> y <b>Password.es</b> es una herramienta que procesan el analisis localmente de tu navegador, garantizando que la contraseña nunca se envie a un servidor.',
            "seccion-filtraciones": 'Verificacion de Filtraciones',
            "parrafo-kaspersky": '<b>Kaspersky</b> y <b>RoboForm</b> comparan tu contraseña con bases de datos de brechas de seguridad, para verificar si ha sido comprometida.',
            "seccion-algoritmos": 'Algoritmos Avanzados',
            "parrafo-proton": 'Se sugieren usar aplicaciones como <b>1Password</b> y <b>Proton Pass</b> para generar contrseñas únicas y aleatorias de ms de 12 caracteres.'
        },
        imagenesAlt: {
            "img-portada": 'Ilustración sobre seguridad digital, ciberseguridad y protección de contraseñas',
            "img-hacker": "Ilustración de un 'hacker' o ciberdelincuente con máscara frente a múltiples pantallas",
            "img-login": 'Interfaz de inicio de sesión y formulario de contraseña',
            "img-privacidad": 'Tecla de privacidad en un teclado digital',
            "img-filtraciones": 'Ilustración de ciberataque con alerta de datos comprometidos',
            "img-algoritmos": 'Código de programación sobre fondo de centro de datos'
        }
    },
    en: {
        textos: {
            "titulo-pestana": 'Experts agree: "When it comes to passwords, length matters more than complexity"',
            "etiqueta-idioma": 'Choose a language:',
            "opcion-es": 'Spanish',
            "opcion-en": 'English',
            "botonTema": 'Change theme',
            "titulo-principal": 'Experts agree: "When it comes to passwords, length matters more than complexity"',
            "parrafo-autor": 'Written by: <b>Nacho Gómez González</b>',
            "parrafo-fecha": 'Date: <b>October 4, 2026</b>',
            "parrafo-1": 'In an increasingly digital world, passwords have become the keys that open the doors to our digital identity. However, this message still does not seem to have fully reached our society, as most users continue to make mistakes and use very weak passwords.',
            "parrafo-2": 'According to Verizon data, around 86% of cyberattacks against web applications worldwide use stolen credentials. This shows that the most effective and popular method is based on password theft.',
            "parrafo-3": 'For this reason, in recent years, platforms, services, and applications have introduced new security measures and strengthened existing ones, such as biometric authentication (fingerprint or facial recognition). Another development is the use of extremely long passwords, even 16 characters or more.',
            "parrafo-4": 'Automatic password generators offer highly complex codes that are almost impossible to remember. However, more and more cybersecurity companies recommend passwords between 14 and 16 characters long, which do not necessarily have to mix letters, numbers, and symbols.',
            "parrafo-5": 'According to psychology, working memory has a limited capacity of about four "chunks" at a time. This means it is easier to remember a 14- to 16-character password if it is made up of three to five easy-to-remember chunks.',
            "parrafo-6": 'According to the Bitwarden password manager, it would take a hacker centuries to crack a 16-character password containing different types of characters using brute force.',
            "subtitulo-crear-clave": 'How to create an easy-to-remember password that is truly secure',
            "parrafo-7": 'Most passwords are 8 characters long, but in an era of emerging cyber threats, creating longer passwords is safer and more necessary.',
            "parrafo-8": 'Longer passwords are harder to crack, but also harder to remember. One of the best ways to solve this is to create a passphrase instead of a single word, such as a short phrase, a saying, a line from a song, or anything that helps you remember it.',
            "parrafo-9": 'If you also separate each word with numbers or symbols, your password will be even harder to guess and steal. This method is especially useful against brute-force attacks, which try the most commonly used password words to steal credentials.',
            "subtitulo-herramientas": 'Tools that can help',
            "parrafo-10": 'There are several reliable and free tools to check your password\'s security.',
            "parrafo-11": 'These platforms assess password strength by analyzing its length, complexity, and patterns, and estimate how long it would take an attacker to crack it using brute force.',
            "seccion-privacidad": 'Privacy and Processing',
            "parrafo-bitwarden": '<b>Bitwarden</b> and <b>Password.es</b> are tools that process the analysis locally in your browser, ensuring that your password is never sent to a server.',
            "seccion-filtraciones": 'Breach Checking',
            "parrafo-kaspersky": '<b>Kaspersky</b> and <b>RoboForm</b> compare your password with databases of security breaches to check whether it has been compromised.',
            "seccion-algoritmos": 'Advanced Algorithms',
            "parrafo-proton": 'Apps such as <b>1Password</b> and <b>Proton Pass</b> are recommended for generating unique, random passwords that are more than 12 characters long.'
        },
        imagenesAlt: {
            "img-portada": 'Illustration about digital security, cybersecurity, and password protection',
            "img-hacker": 'Illustration of a hacker or cybercriminal wearing a mask in front of multiple screens',
            "img-login": 'Login interface and password form',
            "img-privacidad": 'Privacy key on a digital keyboard',
            "img-filtraciones": 'Cyberattack illustration with a compromised data alert',
            "img-algoritmos": 'Programming code against a data center background'
        }
    }
};

// Función principal para cambiar el idioma mediante JS
function cambiarIdioma() {
    const idiomaSeleccionado = selectorIdioma.value;
    const diccionarioTexto = traducciones[idiomaSeleccionado].textos;
    const diccionarioImagenes = traducciones[idiomaSeleccionado].imagenesAlt;

    // 1. Traducir elementos de texto
    for (const id in diccionarioTexto) {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerHTML = diccionarioTexto[id];
        }
    }

    // 2. Traducir textos descriptivos (alt) de las imágenes
    for (const id in diccionarioImagenes) {
        const imagen = document.getElementById(id);
        if (imagen) {
            imagen.alt = diccionarioImagenes[id];
        }
    }

    // Actualizar el atributo lang del HTML y guardar preferencia
    document.documentElement.lang = idiomaSeleccionado;
    localStorage.setItem('idioma-preferido', idiomaSeleccionado);
}

// Función para cambiar el tema oscuro
function cambiarTema() {
    if (!temaActivo) {
        carta.classList.add('dark-theme');
        temaActivo = true;
    } else {
        carta.classList.remove('dark-theme');
        temaActivo = false;
    }
}

botonTema.addEventListener('click', cambiarTema);
selectorIdioma.addEventListener('change', cambiarIdioma);

// Recuperar el idioma al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idioma-preferido') || 'es';
    selectorIdioma.value = idiomaGuardado;
    cambiarIdioma();
});

const themeButton = document.getElementById('themeButton');
const letter = document.getElementById('letter');
const languaje = document.getElementById('languaje');
const title = document.getElementsByTagName('title')[0];
const label = document.getElementsByTagName('label')[0];
const h1 = document.getElementsByTagName('h1')[0];
const h2 = document.getElementsByTagName('h2');
const h3 = document.getElementsByTagName('h3');
const p = document.getElementsByTagName('p');
const images = document.getElementsByTagName('img');

let themeActive = false;
let languajeActive = 'es';

function changeTheme() {
    if (themeActive == false) {
        letter.classList.add('dark-theme');
        themeActive = true;
    } else {
        letter.classList.remove('dark-theme');
        themeActive = false;
    }
}

themeButton.addEventListener('click', changeTheme);

function changeLanguaje() {
    languajeActive = languaje.value;

    if (languajeActive == 'en') {
        title.innerHTML = 'Experts agree: "When it comes to passwords, length matters more than complexity"';
        label.innerHTML = 'Choose a language:';
        themeButton.innerHTML = 'Change theme';
        languaje.options[0].text = 'Spanish';
        languaje.options[1].text = 'English';
        h1.innerHTML = 'Experts agree: "When it comes to passwords, length matters more than complexity"';
        h2[0].innerHTML = 'How to create an easy-to-remember password that is truly secure';
        h2[1].innerHTML = 'Tools that can help';
        h3[0].innerHTML = 'Privacy and Processing';
        h3[1].innerHTML = 'Breach Checking';
        h3[2].innerHTML = 'Advanced Algorithms';
        p[0].innerHTML = 'Written by: <b>Nacho Gómez González</b>';
        p[1].innerHTML = 'Date: <b>October 4, 2026</b>';
        p[2].innerHTML = 'In an increasingly digital world, passwords have become the keys that open the doors to our digital identity. However, this message still does not seem to have fully reached our society, as most users continue to make mistakes and use very weak passwords.';
        p[3].innerHTML = 'According to Verizon data, around 86% of cyberattacks against web applications worldwide use stolen credentials. This shows that the most effective and popular method is based on password theft.';
        p[4].innerHTML = 'For this reason, in recent years, platforms, services, and applications have introduced new security measures and strengthened existing ones, such as biometric authentication (fingerprint or facial recognition). Another development is the use of extremely long passwords, even 16 characters or more.';
        p[5].innerHTML = 'Automatic password generators offer highly complex codes that are almost impossible to remember. However, more and more cybersecurity companies recommend passwords between 14 and 16 characters long, which do not necessarily have to mix letters, numbers, and symbols.';
        p[6].innerHTML = 'According to psychology, working memory has a limited capacity of about four "chunks" at a time. This means it is easier to remember a 14- to 16-character password if it is made up of three to five easy-to-remember chunks.';
        p[7].innerHTML = 'According to the Bitwarden password manager, it would take a hacker centuries to crack a 16-character password containing different types of characters using brute force.';
        p[8].innerHTML = 'Most passwords are 8 characters long, but in an era of emerging cyber threats, creating longer passwords is safer and more necessary.';
        p[9].innerHTML = 'Longer passwords are harder to crack, but also harder to remember. One of the best ways to solve this is to create a passphrase instead of a single word, such as a short phrase, a saying, a line from a song, or anything that helps you remember it.';
        p[10].innerHTML = 'If you also separate each word with numbers or symbols, your password will be even harder to guess and steal. This method is especially useful against brute-force attacks, which try the most commonly used password words to steal credentials.';
        p[11].innerHTML = 'There are several reliable and free tools to check your password\'s security.';
        p[12].innerHTML = 'These platforms assess password strength by analyzing its length, complexity, and patterns, and estimate how long it would take an attacker to crack it using brute force.';
        p[13].innerHTML = '<b>Bitwarden</b> and <b>Password.es</b> are tools that process the analysis locally in your browser, ensuring that your password is never sent to a server.';
        p[14].innerHTML = '<b>Kaspersky</b> and <b>RoboForm</b> compare your password with databases of security breaches to check whether it has been compromised.';
        p[15].innerHTML = 'Apps such as <b>1Password</b> and <b>Proton Pass</b> are recommended for generating unique, random passwords that are more than 12 characters long.';
        images[0].alt = 'Illustration about digital security, cybersecurity, and password protection';
        images[1].alt = 'Illustration of a hacker or cybercriminal wearing a mask in front of multiple screens';
        images[2].alt = 'Login interface and password form';
        images[3].alt = 'Privacy key on a digital keyboard';
        images[4].alt = 'Cyberattack illustration with a compromised data alert';
        images[5].alt = 'Programming code against a data center background';
    } else {
        title.innerHTML = 'Los expertos en ciberseguridad coinciden: "En las contraseñas, la longitud es más importante que la complejidad"';
        label.innerHTML = 'Elige un idioma:';
        themeButton.innerHTML = 'Cambiar tema';
        languaje.options[0].text = 'Español';
        languaje.options[1].text = 'Inglés';
        h1.innerHTML = 'Los expertos en ciberseguridad coinciden: "En las contraseñas, la longitud es más importante que la complejidad"';
        h2[0].innerHTML = 'Cómo crear una contraseña fácil de recordar que sea realmente segura';
        h2[1].innerHTML = 'Herramientas que te pueden ayudar';
        h3[0].innerHTML = 'Privacidad y Procesamiento';
        h3[1].innerHTML = 'Verificacion de Filtraciones';
        h3[2].innerHTML = 'Algoritmos Avanzados';
        p[0].innerHTML = 'Escrito por: <b>Nacho Gómez González</b>';
        p[1].innerHTML = 'A fecha de: <b>4 de octubre del 2026</b>';
        p[2].innerHTML = 'En un mundo cada vez más digitalizado, las contraseñas se han convertido en las llaves para abrir las puertas de nuestra identidad digital. Sin embargo, parece que este mensaje todavía no se ha extendido de lleno en nuestra sociedad, ya que la gran mayoría de usuarios sigue cometiendo errores y usando contraseñas muy débiles.';
        p[3].innerHTML = 'Según los datos de Verizon, alrededor del 86% de los ciberataques que se producen en el mundo a aplicaciones web utilizan credenciales robadas. Esto demuestra que el método más efectivo y popular se basa en el robo de contraseñas.';
        p[4].innerHTML = 'Por esa razón, en los últimos años, las plataformas, servicios y aplicaciones han introducido nuevas medidas de seguridad y han reforzado las existentes, por ejemplo, la introducción de los identificadores biométricos (huella dactilar o reconocimiento facial). Pero también la llegada de contraseñas extremadamente largas incluso de hasta 16 caracteres o más.';
        p[5].innerHTML = 'Existen los generadores de claves automáticos, los cuales te ofrecen códigos muy complejos y casi imposibles de recordar, pero cada vez más empresas de ciberseguridad están apostando por contraseñas de entre 14 y 16 caracteres, que no tienen por qué mezclar letras, números y símbolos.';
        p[6].innerHTML = 'Esto se debe a que según la psicología, la memoria de trabajo tiene una capacidad limitada de aproximadamente cuatro "bloques" a la vez. Esto significa que es más fácil recordar una contraseña de entre 14 y 16 caracteres si se compone de entre tres y cinco bloques fáciles de recordar.';
        p[7].innerHTML = 'A su vez, según el servicio de gestión de contraseñas Bitwarden, un hacker tardaría siglos en descifrar mediante fuerza bruta una contraseña de 16 caracteres que combinara distintos tipos de caracteres.';
        p[8].innerHTML = 'La mayoría de contraseñas son de 8 caracteres pero, en una época en la que surgen nuevas amenazas de piratería informática, crear contraseñas más largas es más seguro y necesario.';
        p[9].innerHTML = 'Las contraseñas más largas son más difíciles de descifrar, pero también más difíciles de recordar. Una de las mejores formas de solucionar esto es crear una frase de contraseña en lugar de una sola palabra, ya sea una frase corta, un dicho, la estrofa de una canción o lo que te ayude a recordarlo.';
        p[10].innerHTML = 'Si encima separas cada palabra con números o símbolos, tu clave será todavía más complicada de adivinar y robar. Este método es especialmente útil contra los ataques de fuerza bruta, que consiste en probar las palabras más usadas en contraseñas para robar claves.';
        p[11].innerHTML = 'Existen varias herramientas confiables y gratuitas para verificar la seguridad de tu contraseña.';
        p[12].innerHTML = 'Estas plataformas evaluan la fortaleza analizando la longitud, complejidad y patrones. Estimando el tiempo que tardaria un atacante en descifrarla mediante fuerza bruta.';
        p[13].innerHTML = '<b>Bitwarden</b> y <b>Password.es</b> es una herramienta que procesan el analisis localmente de tu navegador, garantizando que la contraseña nunca se envie a un servidor.';
        p[14].innerHTML = '<b>Kaspersky</b> y <b>RoboForm</b> comparan tu contraseña con bases de datos de brechas de seguridad, para verificar si ha sido comprometida.';
        p[15].innerHTML = 'Se sugieren usar aplicaciones como <b>1Password</b> y <b>Proton Pass</b> para generar contrseñas únicas y aleatorias de ms de 12 caracteres.';
        images[0].alt = 'Ilustración sobre seguridad digital, ciberseguridad y protección de contraseñas';
        images[1].alt = "Ilustración de un 'hacker' o ciberdelincuente con máscara frente a múltiples pantallas";
        images[2].alt = 'Interfaz de inicio de sesión y formulario de contraseña';
        images[3].alt = 'Tecla de privacidad en un teclado digital';
        images[4].alt = 'Ilustración de ciberataque con alerta de datos comprometidos';
        images[5].alt = 'Código de programación sobre fondo de centro de datos';
    }
    document.documentElement.lang = languajeActive;
}

languaje.addEventListener('change', changeLanguaje);

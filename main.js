const readline = require('readline');


// Mensaje inicial
console.log('CORE Quiz');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'quiz> '
});

rl.prompt();

rl
.on('line', (line) => {
    switch (line.trim()) {
        case '':
            break;

        case 'help':
        case 'h':
            helpCmd();
            break;

        case 'quit':
        case 'q':
            quitCmd();
            break;

        case 'add':
            addCmd();
            break;

        case 'list':
            listCmd();
            break;

        case 'show':
            showCmd();
            break;

        case 'test':
            testCmd();
            break;

        case 'play':
        case 'p':
            playCmd();
            break;

        case 'delete':
            deleteCmd();
            break;

        case 'edit':
            editCmd();
            break;

        case 'credits':
            creditsCmd();
            break;

        default:
            console.log(`Comando desconocido: '${line.trim()}'`);
            console.log(`Use 'help' para ver todos los comandos disponibles.`);
            break;
    }
    rl.prompt();
})
.on('close', () => {
    console.log('Adios!');
    process.exit(0);
});




/**
 * Muestra la ayuda.
 */
const helpCmd = () => {
    console.log("Commandos:");
    console.log("  h|help - Muestra esta ayuda.");
    console.log("  list - Listar los quizzes existentes.");
    console.log("  show <id> - Muestra la pregunta y la respuesta el quiz indicado.");
    console.log("  add - Añadir un nuevo quiz interactivamente.");
    console.log("  delete <id> - Borrar el quiz indicado.");
    console.log("  edit <id> - Editar el quiz indicado.");
    console.log("  test <id> - Probar el quiz indicado.");
    console.log("  p|play - Jugar a preguntar aleatoriamente todos los quizzes.");
    console.log("  credits - Créditos.");
    console.log("  q|quit - Salir del programa.");
};


/**
 * Lista todos los quizzes existentes en el modelo.
 */
const listCmd = () => {
    console.log('Listar todos los quizzes existentes.');
};


/**
 * Muestra el quiz indicado en el parámetro: la pregunta y la respuesta.
 *
 * @param id Clave del quiz a mostrar.
 */
const showCmd = id => {
    console.log('Mostrar el quiz indicado.');
};


/**
 * Añade un nuevo quiz al módelo.
 * Pregunta interactivamente por la pregunta y por la respuesta.
 */
const addCmd = () => {
    console.log('Añadir un nuevo quiz.');
};



/**
 * Borra un quiz del modelo.
 *
 * @param id Clave del quiz a borrar en el modelo.
 */
const deleteCmd = id => {
    console.log('Borrar el quiz indicado.');
};


/**
 * Edita un quiz del modelo.
 *
 * @param id Clave del quiz a editar en el modelo.
 */
const editCmd = id => {
    console.log('Editar el quiz indicado.');
};


/**
 * Prueba un quiz, es decir, hace una pregunta del modelo a la que debemos contestar.
 *
 * @param id Clave del quiz a probar.
 */
const testCmd = id => {
    console.log('Probar el quiz indicado.');
};


/**
 * Pregunta todos los quizzes existentes en el modelo en orden aleatorio.
 * Se gana si se contesta a todos satisfactoriamente.
 */
const playCmd = () => {
    console.log('Jugar.');
};


/**
 * Muestra los nombres de los autores de la práctica.
 */
const creditsCmd = () => {
    console.log('Autores de la práctica:');
    console.log('Nombre 1');
    console.log('Nombre 2');
};


/**
 * Terminar el programa.
 */
const quitCmd = () => {
    rl.close();
};

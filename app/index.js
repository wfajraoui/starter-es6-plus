import Exemple from './Exemple';
import './style.scss';

//Instanciate the Exemple Class
const exp = new Exemple(); // take a look at the console

console.log(exp.exemple)
// ajouter de l'information dans la page HTML
const aResult = document.getElementById('result');
aResult.innerHTML = 'Some Text';


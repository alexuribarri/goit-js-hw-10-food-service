import './styles.css';
import Handlebars from 'handlebars';

const body = document.querySelector('body');
console.log(body);
body.insertAdjacentHTML('beforeend', '<h1>Hello World</h1>');

// body.innerHTML('<h1>Hello World</h1>');

console.log(Handlebars);

var template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');
console.log(template({ doesWhat: 'Rocks' }));

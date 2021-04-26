import './styles.css';
import 'handlebars';
var template = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>')
console.log(template({doesWhat:'Rocks'}))
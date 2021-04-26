import item from './templates/item.hbs';
console.log(item({ hello: 'zyuzya' }));
document
  .querySelector('body')
  .insertAdjacentHTML('afterbegin', item({ hello: 'zyuzya' }));

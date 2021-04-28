import item from './templates/item.hbs';
//console.log(item({ hello: 'zyuzya' }));
document
  .querySelector('img[src]')
  .insertAdjacentHTML('beforeend', item({ imageUrl: 'https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg' }));



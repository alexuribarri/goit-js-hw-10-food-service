import item from './templates/item.hbs';
import menu from './menu.json';

const itemsRecall = (src, alt, cardName, price, cardDescr, tagList) => {
  // item({ });

  document
    .querySelector('.js-menu')
    .insertAdjacentHTML(
      'beforeend',
      item({ imageUrl: src, imageAlt: alt, itemCardName: cardName }),
    );
};

itemsRecall(
  'https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg',
  0,
  0,
  0,
  0,
  0,
);

// const menuItems = menu.map(menuItem => console.log(menuItem.description));

// const imgUrl = {
//   imageUrl:
//     'https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg',
// };

// console.log(imgUrl);

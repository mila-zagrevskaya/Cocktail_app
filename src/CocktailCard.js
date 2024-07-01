import crel from 'crel';

export class CocktailCard {
    renderCocktailCard = (item) => {
      const { idDrink, strDrinkThumb, strDrink } = item;
      const card = crel('div', { class: 'card', id: idDrink },
        crel('img', { src: `${strDrinkThumb}`, alt: `${strDrink}`, class: 'cocktail-picture' }),
        crel('h3', { class: 'cocktail-title' }, `${strDrink}`));
      return card;
    }
}

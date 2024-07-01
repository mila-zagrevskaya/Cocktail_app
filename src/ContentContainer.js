import crel from 'crel';
import { CocktailCard } from './CocktailCard';
import { contentWrapper } from './wrappers';


export class ContentContainer {
  constructor() {
    this._renderContentContainer();
  }

  mapCocktailCards = (items) => {
    this.cardsWrapper.textContent = '';
    items.map(item => {
      const cocktailCard = new CocktailCard();
      const card = cocktailCard.renderCocktailCard(item);
      crel(this.cardsWrapper, crel(card));
      return card;
    });
  }

  _renderContentContainer = () => {
    const searchWrapper = crel('div', { class: 'search-wrapper' });
    this.cardsWrapper = crel('div', { class: 'cards-wrapper scrollbar', id: 'style' });
    crel(contentWrapper, searchWrapper,
      crel(this.cardsWrapper));
  }
}

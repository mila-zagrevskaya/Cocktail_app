import { getItems, getListOfDrinks } from './queries';
import { Sidebar } from './Sidebar';
import {
  categoriesOfDrinksURL, filterByCategoryURL, alcoholicDrinksURL, nonAlcoholicDrinksURL,
} from './constants';
import { ContentContainer } from './ContentContainer';


export class App {
  init = () => {
    this._renderListOfCategories();
    this.contentContainer = new ContentContainer();
  }

  _renderListOfCategories = async () => {
    const items = await getListOfDrinks(categoriesOfDrinksURL);
    const sidebar = new Sidebar(items);
  }

  _getFilteredItemsByCategory = async (name) => {
    const items = await getItems(`${filterByCategoryURL}${name}`);
    return items;
  }

  setSelectedCategory = async (name) => {
    const { drinks } = await this._getFilteredItemsByCategory(name);
    this.contentContainer.mapCocktailCards(drinks);
    this._clearFilter('alcohol-filter');
  }

  _getFilteredByAlcohol = async (target) => {
    const items = target.checked
      ? await getListOfDrinks(alcoholicDrinksURL)
      : await getListOfDrinks(nonAlcoholicDrinksURL);
    return items;
  }

  sortItemsByAlcoholContent = async ({ target }) => {
    const items = await this._getFilteredByAlcohol(target);
    this.contentContainer.mapCocktailCards(items);
    this._clearFilter('category');
  }

  setDefaultCategory = () => {
    const defaultCategory = document.getElementById('category 0');
    defaultCategory.checked = true;
    this.setSelectedCategory(defaultCategory.labels[0].innerHTML);
    this._clearFilter('alcohol-filter');
  }

  _clearFilter = (name) => {
    const clearCategories = document.getElementsByName(name);
    clearCategories.forEach(elem => {
      const filter = elem;
      filter.checked = false;
    });
  }
}

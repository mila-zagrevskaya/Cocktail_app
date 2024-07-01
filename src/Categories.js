import crel from 'crel';
import { sidebarWrapper } from './wrappers';
import { app } from './index';


export class Categories {
  constructor(items) {
    this.items = items;
    this._renderNavigationByCategories();
    app.setDefaultCategory();
  }

  _renderCategoryItem = (name, id) => {
    const labelRadio = crel('label', { class: 'label-radio', for: `category ${id}` }, `${name}`);
    const radio = crel('input', {
      class: 'radio', type: 'radio', id: `category ${id}`, name: 'category',
    });
    radio.onchange = () => {
      app.setSelectedCategory(name);
    };
    crel(
      this.categoriesContainer,
      radio,
      labelRadio,
    );
  }

  _renderNavigationByCategories = () => {
    this.categoriesContainer = crel('div', { class: 'categories-container' });
    this.items.forEach((item, index) => this._renderCategoryItem(item.strCategory, index));
    crel(sidebarWrapper,
      crel('div', { class: 'nav-container' },
        crel('h2', { class: 'title' }, 'Categories'),
        this.categoriesContainer));
  }
}

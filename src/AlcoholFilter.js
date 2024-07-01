import crel from 'crel';
import { sidebarWrapper } from './wrappers';
import { app } from './index';


export class AlcoholFilter {
  constructor() {
    this._renderLayout();
  }

  _renderLayout = () => {
    const checkbox = crel('input', { type: 'checkbox', name: 'alcohol-filter' });
    checkbox.onchange = this._onChangeHandler;
    crel(sidebarWrapper,
      crel('div', { class: 'switch-container' },
        crel('label', { class: 'switch' },
          crel(checkbox),
          crel('span', { class: 'slider round' })),
        crel('h4', { class: 'filter-title' }, 'Contain alcohol')));
  }

  _onChangeHandler = (event) => {
    app.sortItemsByAlcoholContent(event);
  }
}

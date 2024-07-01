import { Categories } from './Categories';
import { AlcoholFilter } from './AlcoholFilter';


export class Sidebar {
  constructor(items) {
    const alcoholFilter = new AlcoholFilter();
    const categories = new Categories(items);
  }
}

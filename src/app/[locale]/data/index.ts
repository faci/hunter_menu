import { Breakfast } from './menus/breakfast';
import { Bowls } from './menus/bowls';
import { Crepes } from './menus/crepes';
import { Combos } from './menus/combos';
import { MainDishes } from './menus/mainDishes';
import { Alitas } from './menus/alitas';
import { ToShare } from './menus/toShare';
import { Menu } from './menu_type';
import { Burgers } from './menus/burgers';
// import { Offers } from './menus/offers';
import { Coffee } from './menus/coffee';
import { Refresh } from './menus/refresh';
import { SmoothiesClassicals, SmoothiesHouse } from './menus/smoothies';

export const AllMenus = [
  Breakfast,
  ToShare,
  MainDishes,
  Alitas,
  Bowls,
  Crepes,
  Combos,
  Burgers,
  // Offers,
  Coffee,
  Refresh,
  SmoothiesClassicals,
  SmoothiesHouse
];

export const MenuById: { [k: string]: Menu } = Object.fromEntries(
  AllMenus.map(menu => [menu.id, menu])
);

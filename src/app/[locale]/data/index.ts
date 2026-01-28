import { Breakfast } from './menus/breakfast';
import { Bowls } from './menus/bowls';
import { Crepes } from './menus/crepes';
import { MainDishes } from './menus/mainDishes';
import { ToShare } from './menus/toShare';
import { Menu } from './menu_type';
import { Burgers } from './menus/burgers';
import { Offers } from './menus/offers';
import { Coffee } from './menus/coffee';
import { Refresh } from './menus/refresh';
import { Smoothies } from './menus/smoothies';

export const AllMenus = [
  Breakfast,
  ToShare,
  MainDishes,
  Bowls,
  Crepes,
  Burgers,
  Offers,
  Coffee,
  Refresh,
  Smoothies
];

export const MenuById: { [k: string]: Menu } = Object.fromEntries(
  AllMenus.map(menu => [menu.id, menu])
);

import { Plate } from "./data/menu_type";

export function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export type PlateGroup = {
  subtitle?: string;
  plats: Plate[];
};

export function groupPlatesBySubtitle(plats: Plate[]): PlateGroup[] {
  return plats.reduce<PlateGroup[]>((groups, plat) => {
    const lastGroup = groups[groups.length - 1];

    if (!lastGroup || plat.subtitle) {
      groups.push({ subtitle: plat.subtitle, plats: [plat] });
      return groups;
    }

    lastGroup.plats.push(plat);
    return groups;
  }, []);
}

export type Plate = {
  label: string;
  description: string;
  price: number;
}

export type Menu = {
  id: string;
  categorie: string;
  plats: Plate[];
  extra?: { label: string, price: number }[] | undefined;
  comment?: string | undefined;
}

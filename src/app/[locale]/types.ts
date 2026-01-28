type Plat = {
  label: string;
  description?: string;
  price: number;
};

type Extra = {
  label: string;
  price: number;
};

type Menu = {
  categorie: string;
  i18nKey: string;
  plats: Plat[];
  availableFrom?: number;
  availableUntil?: number;
  comment?: string;
  extras?: Extra[];
};
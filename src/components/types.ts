export type Item = {
  title: string;
  description: string;
  date: Date;
  id: number;
};

export type List = {
  title: string;
  items: Item[];
  id: number;
};

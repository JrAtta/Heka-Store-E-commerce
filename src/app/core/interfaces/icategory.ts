export interface ICategory {
  title: string;
  icon: string;
  items: Item[];
}
export interface Item {
  name: string;
  count: number | string;
}



export interface Ibest {
  image: string;
  title: string;
  rait: number;
  price: Price;
}

interface Price {
  oldPrice: number;
  newPrice: number;
}

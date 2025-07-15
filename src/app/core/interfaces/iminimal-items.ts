

export interface IminimalItems  {
  title:string,
  image:string,
  category:string,
  price: Price
}
interface Price {
  newPrice: number;
  oldPrice: number;
}

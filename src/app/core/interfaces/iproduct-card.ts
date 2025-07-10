export interface IproductCard {
  id:string,
  defaultImage:string,
  hoverImage:string,
badgeText?:string,
category: string,
title:string,
rait:number,
ratingAmount?:number,
price: Iprice ,
description?:string,




}
interface Iprice {
newPrice:number,
oldPrice?:number,
}


import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-minimal-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minimal-products.component.html',
  styleUrl: './minimal-products.component.scss'
})
export class MinimalProductsComponent {
  // private _ActivatedRoute = inject(ActivatedRoute)
  // title!:string;
  // product!:IminimalProducts | undefined ;

  newArrivalItems:IminimalProducts[]= [
    {
      title:'Relaxed Short full Sleeve T-Shirt',
      image:'./assets/images/products/clothes-1.jpg',
      category:' Clothes',
      price: {
        newPrice: 45,
        oldPrice: 12,
      },
    },
    {
      title:'Girls pnk Embro design Top',
      image:'./assets/images/products/clothes-2.jpg',
      category:' Clothes',
      price: {
        newPrice: 61,
        oldPrice: 9,
      },
    },
    {
      title:'Black Floral Wrap Midi Skirt',
      image:'./assets/images/products/clothes-3.jpg',
      category:' Clothes',
      price: {
        newPrice: 76,
        oldPrice: 25,
      },
    },
    {
      title:'Pure Garment Dyed Cotton Shirt',
      image:'./assets/images/products/shirt-1.jpg',
      category:' Mens Fashion',
      price: {
        newPrice: 68,
        oldPrice: 31,
      },
    },
    {
      title:'MEN Yarn Fleece Full-Zip Jacket',
      image:'./assets/images/products/jacket-5.jpg',
      category:' winter wear',
      price: {
        newPrice: 61,
        oldPrice: 11,
      },
    },
    {
      title:'Mens Winter Leathers Jackets',
      image:'./assets/images/products/jacket-1.jpg',
      category:' winter wear',
      price: {
        newPrice: 32,
        oldPrice: 20,
      },
    },
    {
      title:'Mens Winter Leathers Jackets',
      image:'./assets/images/products/jacket-3.jpg',
      category:' winter wear',
      price: {
        newPrice: 50,
        oldPrice: 25,
      },
    },
    {
      title:'Better Basics French Terry Sweatshorts',
      image:'./assets/images/products/shorts-1.jpg',
      category:'Shorts',
      price: {
        newPrice: 20,
        oldPrice: 10,
      },
    },

  ]
  trendingItems:IminimalProducts[]= [

    {
      title:'Running & Trekking Shoes - White',
      image:'./assets/images/products/sports-1.jpg',
      category:' sports',
      price: {
        newPrice: 49,
        oldPrice: 15,
      },
    },
    {
      title:'Trekking & Running Shoes - black',
      image:'./assets/images/products/sports-2.jpg',
      category:' sports',
      price: {
        newPrice: 78,
        oldPrice: 36,
      },
    },
    {
      title:'Womens Party Wear Shoes',
      image:'./assets/images/products/party-wear-1.jpg',
      category:' party waear',
      price: {
        newPrice: 94,
        oldPrice: 42,
      },
    },
    {
      title:"Sports Claw Women's Shoes",
      image:'./assets/images/products/sports-3.jpg',
      category:'sports',
      price: {
        newPrice: 54,
        oldPrice: 65,
      },
    },
    {
      title:'Air Trekking Shoes - white',
      image:'./assets/images/products/sports-6.jpg',
      category:'sports',
      price: {
        newPrice: 52,
        oldPrice: 55,
      },
    },
    {
      title:'Boot With Suede Detail',
      image:'./assets/images/products/shoe-3.jpg',
      category:'boots',
      price: {
        newPrice: 20,
        oldPrice: 30,
      },
    },
    {
      title:"Men's Leather Formal Wear shoes",
      image:'./assets/images/products/shoe-1.jpg',
      category:'formal',
      price: {
        newPrice: 56,
        oldPrice: 78,
      },
    },
    {
      title:"Casual Men's Brown shoes",
      image:'./assets/images/products/shoe-2.jpg',
      category:'shoes',
      price: {
        newPrice: 50,
        oldPrice: 55,
      },
    },


  ]
  topRatedItems:IminimalProducts[]= [

    {
      title:'Pocket Watch Leather Pouch',
      image:'./assets/images/products/watch-3.jpg',
      category:' watches',
      price: {
        newPrice: 50,
        oldPrice: 34,
      },
    },
    {
      title:'Silver Deer Heart Necklace',
      image:'./assets/images/products/jewellery-3.jpg',
      category:' jewelelly',
      price: {
        newPrice: 84,
        oldPrice: 30,
      },
    },
    {
      title:'Titan 100 Ml Womens Perfume',
      image:'./assets/images/products/perfume.jpg',
      category:'perfume',
      price: {
        newPrice: 42,
        oldPrice: 10,
      },
    },
    {
      title:"Men's Leather Reversible Belt",
      image:'./assets/images/products/belt.jpg',
      category:'belt',
      price: {
        newPrice: 24,
        oldPrice: 10,
      },
    },
    {
      title:'platinum Zircon Classic Ring',
      image:'./assets/images/products/jewellery-2.jpg',
      category:'jewellery',
      price: {
        newPrice: 62,
        oldPrice: 65,
      },
    },
    {
      title:'Smart watche Vital Plus',
      image:'./assets/images/products/watch-1.jpg',
      category:'watches',
      price: {
        newPrice: 56,
        oldPrice: 70,
      },
    },
    {
      title:"shampoo conditioner packs",
      image:'./assets/images/products/shampoo.jpg',
      category:'cosmetics',
      price: {
        newPrice: 20,
        oldPrice: 30,
      },
    },
    {
      title:"Rose Gold Peacock Earrings",
      image:'./assets/images/products/jewellery-1.jpg',
      category:'jewellery',
      price: {
        newPrice: 20,
        oldPrice: 30,
      },
    },


  ]

  //  ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   this.newArrivalItems.push(...this.trendingItems , ...this.topRatedItems);
  //   console.log(this.newArrivalItems);


  //    this._ActivatedRoute.paramMap.subscribe({
  //       next:(paraMap:ParamMap)=>{
  //       // this.category = paraMap.get('category')!;  // handle possible null values  (  ! =   || '')
  //       this.title = paraMap.get("title") || '' ; // handle possible null values  (  ! =   || '')
  //       // this.id = +paraMap.get('id')! ; // plus here for convert string to number
  //      let product = this.getProductByName(this.title);
  //       this.product = product;


  //       }
  //     })

  //  }

  //  getProductByName(title:string):IminimalProducts | undefined {
  //   return this.newArrivalItems.find(product => product.title === title)
  //  }
}

interface IminimalProducts  {
  title:string,
  image:string,
  category:string,
  price: Price
}
interface Price {
  newPrice: number;
  oldPrice: number;
}

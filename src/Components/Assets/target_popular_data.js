import p5_img from './daisy-sour-cream.jpeg'
import p6_img from './sunmaid-dried-apricots.jpeg'
import p7_img from './strawberries 1lb.jpeg'
import p8_img from './breyers-vanilla-icecream.jpeg'

let data_product = [
  {
    id:5,
    name:"Daisy Squeeze Sour Cream - 14oz",
    image:p5_img,
    // walmart price 
    new_price:4.14,
    // target price
    old_price:4.39,
  },
  {id:6,
    name:"Sun-Maid Mediterranean Dried Apricots Bag - 6oz",
    image:p6_img,
    new_price:4.98,
    old_price:4.29,
  },
  {id:7,
    name:"Strawberries - 1lb",
    image:p7_img,
    new_price:4.12,
    old_price:4.69,
  },
  {id:8,
    name:"Breyers Original Ice Cream Natural Vanilla - 48oz",
    image:p8_img,
    new_price:4.67,
    old_price:5.29,
  },
];

export default data_product;

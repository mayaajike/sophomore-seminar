import p1_img from './banana.jpeg'
import p2_img from './raspberries 12oz.jpeg'
import p3_img from './lactaid-whole-milk.jpg'
import p4_img from './kraft-parm-grated-cheese.jpg'

let data_product = [
  {
    id:1,
    name:"Banana",
    image:p1_img,
    // walmart price 
    new_price:0.25,
    // target price
    old_price:0.25,
  },
  {id:2,
    name:"Raspberries - 12oz",
    image:p2_img,
    new_price:4.94,
    old_price:5.59,
  },
  {id:3,
    name:"Lactaid Whole Milk - 96oz",
    image:p3_img,
    new_price:6.38,
    old_price:6.89,
  },
  {id:4,
    name:"Kraft Parmesan Grated Cheese - 8oz",
    image:p4_img,
    new_price:4.14,
    old_price:4.39,
  },
];

export default data_product;

import { useState } from "react";
import '../styles/Product.less';
import Description from "./Description";
import product1 from '../assets/images/image-product-1.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4 from '../assets/images/image-product-4.jpg';
import { ProductProps } from "../service";
import Gallery from "./Gallery";



function Product(){
    const product: ProductProps = {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        brand: 'Sneaker Company',
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        price: 125, 
        discount: 0.5,
        pictures: [product1,product2,product3, product4],


    } 

    const [activeimg, setactiveImg] = useState(0);

    const handleActiveImg = (n: number) => {
      if (n > -1 && n < product.pictures.length) {
        setactiveImg(n);
      } else {
        throw new Error('Wrong image');
      }
    };
    

   return (
    <div className="product">
        <Gallery pictures={product.pictures} active={activeimg} pushActive={handleActiveImg} productName={product.name}/>

        <Description {...product} />
    </div>
   ); 
}

export default Product;
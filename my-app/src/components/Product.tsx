import '../styles/Product.less';
import Info from "./uis/Info";
import product1 from '../assets/images/image-product-1.jpg';
import product2 from '../assets/images/image-product-2.jpg';
import product3 from '../assets/images/image-product-3.jpg';
import product4 from '../assets/images/image-product-4.jpg';
import { ProductProps } from "../service";
import Gallery from "@/components/uis/Gallery";



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


   return (
    <div className="product">
        <Gallery pictures={product.pictures} productName={product.name}/>

        <Info {...product} />
    </div>
   ); 
}

export default Product;
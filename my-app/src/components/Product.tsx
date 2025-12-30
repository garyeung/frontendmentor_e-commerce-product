import './Product.less';
import Info from "@/components/uis/Info";
import Gallery from "@/components/uis/Gallery";


interface Props {
    id: number,
    name: string,
    brand: string,
    description: string,
    price: number,
    discount: number,
    pictures: string[]
}

function Product({product}: {product: Props}){

   return (
    <div className="product">
        <Gallery pictures={product.pictures} productName={product.name}/>

        <Info {...product} />
    </div>
   ); 
}

export default Product;
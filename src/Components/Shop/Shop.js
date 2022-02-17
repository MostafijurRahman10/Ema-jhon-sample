import React from 'react';
import fakeData from'../../fakeData';
import {useState} from 'react' ;
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

function Shop() {
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] =useState([])
    const handleAddProduct = (Product) =>{
        const newCart =[...cart,Product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

                

            </div>
        </div>
    );
}

export default Shop;
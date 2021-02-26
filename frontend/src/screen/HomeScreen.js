import React from './HomeScreen.css'
import Product from '../components/Product'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../redux/actions/productAction';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProduct);
    const {products, loading, error} = getProducts;
    console.log(getProducts)

    useEffect (() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homesreen__title">Latest Products</h2>
            <div className="homescreen__products">
                {loading ? (<h2>Loading</h2>)
                : error ? (<h2>{error}</h2>)
                : (products.map((product) => <Product 
                        key={product._id}
                        productId={product._id}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}/>))}
            </div>
        </div>
    )
}

export default HomeScreen

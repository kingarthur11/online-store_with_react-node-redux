import React from './HomeScreen.css'
import Product from '../components/Product'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts as listProducts} from '../redux/actions/productAction';


const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProduct);
    const {product, loading, error} = getProducts;

    useEffect (() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className="homesreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen

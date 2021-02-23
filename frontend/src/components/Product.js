import './Product.css'
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <div className="product">
            <img src="https://picsum.photos/id/0/5616/3744" alt="product"/>
            <div className="product__info">
                <p className="info__name">Product 1</p>
                <p className="info__description">
                    loremSit proident quis quis magna incididunt
                    Sint ut nulla sunt adipisicing excepteur nostrud
                    aute occaecat nulla quis voluptate aliqua.
                </p>
                <p className="info__price">#499.9</p>
                <Link to={`/product/${111}`} className="info__button">View</Link>
            </div>
        </div>
    )
}

export default Product

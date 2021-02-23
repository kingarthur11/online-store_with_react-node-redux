import './ProductScreen.css'

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                <img src="https://picsum.photos/id/0/5616/3744" alt="product"/>
                </div>
                <div className="left__info">
                    <p className="left__name">Product Name</p>
                    <p>Price: $499.9</p>
                    <p>Elit incididunt consectetur cillum fugiat 
                        anim cupidatat velit.</p>
                </div>
            </div>
            <div className="productioncreen__right">
                <div className="right__info">
                    <p>Price: <span>$399.9</span></p>
                    <p>Status: <span>In stock</span></p>
                    <p>Qty 
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select></p>
                    <p><button type="button">Add to Cart</button>  </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen

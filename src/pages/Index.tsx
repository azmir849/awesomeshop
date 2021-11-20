import React from 'react'

//Import products from data
import {products} from '../data/products'

//Import ProductItem from products components
import ProductItem from '../components/products/ProductItem'

interface Props {

}

const index: React.FC<Props> = () => {
        return <div className="page--products">
                <div className="products">
                        {products.map(product =><ProductItem key={product.id} product={product} />)}
                </div>

        </div>
}

export default index
import React from 'react'

//import custom Hook
import {useParams} from 'react-router-dom'

interface Props {

}

const ProductDetail: React.FC<Props> = () => {
        const params = useParams();
        console.log(params)
        return <div>ProductDetail</div>
}

export default ProductDetail
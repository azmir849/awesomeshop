import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'

interface Props {

}

const Routes: React.FC<Props> = () => {
        return <Switch>
            <Route path='/'>
                <Index/>
            </Route>
            <Route path='/products'>
                <Products/>
            </Route>
            <Route path='/products/:id'>
                <ProductDetail/>
            </Route>
            <Route path='*'>
                <PageNotFound/>
            </Route>
        </Switch>
}

export default Routes
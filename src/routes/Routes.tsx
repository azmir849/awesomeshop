import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Index from '../pages/Index'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import PageNotFound from '../pages/PageNotFound'

//Protected Routes
import AdminRoutes from './AdminRoutes'
import BuyRoutes from './BuyRoutes'
import OrderRoutes from './OrderRoutes'

//Import Layout
import Layout from '../Layout'

interface Props {

}

const Routes: React.FC<Props> = () => {
        return(
            <>
            <Layout/>
             <Switch>
            <Route path='/buy'>
                <BuyRoutes/>
            </Route>
            <Route path='/orders'>
                <OrderRoutes/>
            </Route>
            <Route path='/admin'>
                <AdminRoutes/>
            </Route>
            <Route path='/products/:id'>
                <ProductDetail/>
            </Route>
            <Route path='/products'>
                <Products/>
            </Route>
            <Route exact path='/'>
                <Index/>
            </Route>
            <Route path='*'>
                <PageNotFound/>
            </Route>
        </Switch>
        </>
        )
}

export default Routes
import React from 'react'
import {Switch,Route} from 'react-router-dom'


import ManageProducts from '../pages/ManageProducts'
import ManageOrders from '../pages/ManageOrders'
import ManageOrderDetails from '../pages/ManageOrderDetails'
import ManageUsers from '../pages/ManageUsers'
import PageNotFound from '../pages/PageNotFound'

interface Props {

}

const AdminRoutes: React.FC<Props> = () => {
        return <Switch>
            <Route path='/admin/manage-products'>
                <ManageProducts/>
            </Route>
            <Route path='/admin/manage-orders'>
                <ManageOrders/>
            </Route>
            <Route path='/admin/manage-orders/id'>
                <ManageOrderDetails/>
            </Route>
            <Route path='/admin/manage-user'>
                <ManageUsers/>
            </Route>
            <Route path='*'>
                <PageNotFound/>
            </Route>

        </Switch>
}

export default AdminRoutes
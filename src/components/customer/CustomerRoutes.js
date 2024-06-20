import {Navigate, Route, Routes} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {CustomerDashboard} from "./CustomerDashboard";
import {ProductsRoutes} from "./products/ProductsRoutes";

const CustomerRoutes = () => {
    return (
        <Routes>
            <Route element={<MasterLayout/>}>
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='auth/*' element={<Navigate to='/dashboard'/>}/>
                {/* Pages */}
                <Route path='dashboard' element={<CustomerDashboard/>}/>
                <Route path='products/*' element={<ProductsRoutes/>}/>
                {/* Page Not Found */}
                <Route path='*' element={<Navigate to='/error/404'/>}/>
            </Route>
        </Routes>
    )
}

export {CustomerRoutes}

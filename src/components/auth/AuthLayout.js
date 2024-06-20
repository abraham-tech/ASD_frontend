import {useEffect} from 'react'
import {Link, Outlet} from 'react-router-dom'
import {toAbsoluteUrl} from "../../_metronic/helpers";

const AuthLayout = () => {
    useEffect(() => {
        const root = document.getElementById('root')
        if (root) {
            root.style.height = '100%'
        }
        return () => {
            if (root) {
                root.style.height = 'auto'
            }
        }
    }, [])

    return (
        <div className='d-flex flex-column flex-lg-row flex-column-fluid '>
            {/* begin::Body */}
            <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
                {/* begin::Form */}
                <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
                    {/* begin::Wrapper */}
                    <div className='w-lg-500px p-10'>
                        <Outlet/>
                    </div>
                    {/* end::Wrapper */}
                </div>
                {/* end::Form */}

                {/* begin::Footer */}
                <div className='d-flex flex-center flex-wrap px-5'>
                    {/* begin::Links */}
                    <div className='d-flex fw-semibold text-primary fs-base'>
                        <span className='px-5' target='_blank'>
                            <a href="#">Oktion</a>
                        </span>
                    </div>
                    {/* end::Links */}
                </div>
                {/* end::Footer */}
            </div>
            {/* end::Body */}

            {/* begin::Aside */}
            <div
                className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
                style={{backgroundImage: `url(${toAbsoluteUrl('/media/auth-bg.png')})`}}
            >
                {/* begin::Content */}
                <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
                    {/* begin::Logo */}
                    <Link to='/' className='mb-12'>
                        <img alt='Logo' src={toAbsoluteUrl('/media/oktion.png')} style={{width: '200px'}}/>
                    </Link>
                    {/* end::Logo */}
                    {/* begin::Title */}
                    <h1 className='text-white fs-2qx fw-bolder text-center mb-7'>
                        Discover Seamless Buying and Selling
                    </h1>
                    {/* end::Title */}

                    {/* begin::Text */}
                    <div className='text-white fs-4 text-center'>
                        Step into a world where <span
                        className='opacity-75-hover text-warning fw-bold me-1'>excitement</span> convenience meets opportunity with our innovative buying and selling <span className='opacity-75-hover text-warning fw-bold me-1'>Dive into the ease of browsing and purchasing,</span>
                        all from your devices. <span
                        className='opacity-75-hover text-warning fw-bold me-1'>Explore a marketplace</span> teeming with valuable goods waiting to find their new owners.
                        Buy with confidence, track your favorite items, and stand out among other buyers, all while enjoying the excitement of online commerce.
                        Your next valuable acquisition is just a click away – get prepared to buy, sell, and succeed with our unparalleled buying and selling!
                    </div>
                    {/* end::Text */}
                </div>
                {/* end::Content */}
            </div>
            {/* end::Aside */}
        </div>
    )
}

export {AuthLayout}

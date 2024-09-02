import React from 'react'
import { useLocation } from 'react-router-dom'

import Footer from "../Footer/Footer"
import ServiceFooter from "../Footer/ServiceFooter"

function SwitchFooter() {
    const location = useLocation()

    const ServiceFooterPath = [
        '/about',
        '/customclearance',
        '/warehousing',
        '/freightforwarding',
        '/transportation',
        '/eximconsultancy',
        '/logisticsdesign',
    ]

    const ShowServiceFooter = ServiceFooterPath.includes(location.pathname)
    return ShowServiceFooter ? <ServiceFooter /> : <Footer />


}

export default SwitchFooter
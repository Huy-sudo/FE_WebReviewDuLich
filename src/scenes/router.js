import Admin from "../scenes/Admin";
// import Customer from "./Customers";
// import PrescriptionDetail from "./PrescriptionDetail"
// import CustomerDetail from "./CustomerDetail"
// import Dashboard from "./Dashboard";
// import Medical from "./Medical";
import Home from "./Home"
import Review from "./Review"
export default [
    {
        path:   '/admin',
        component: Admin
    },
    // {
    //     path: '/prescription',
    //     component: Prescription
    // },

    // {
    //     path: '/customer',
    //     component: Customer
    // },

    // {
    //     path: '/prescription/:id/detail',
    //     component: PrescriptionDetail
    // },

    // {
    //     path: '/customer/:id/detail',
    //     component: CustomerDetail
    // },

    // {
    //     path: '/',
    //     component: Dashboard
    // },
    // {
    //     path: '/medical',
    //     component: Medical
    // },
    {
        path: '/home',
        component: Home
    },
    {
    path: "/review",
    component: Review
    }
]

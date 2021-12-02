import Admin from "../scenes/Admin";
import City from "../scenes/Admin/City"
import Review from "../scenes/Admin/Review"
import Place from "../scenes/Admin/Place"
import User from "../scenes/Admin/User"
import Home from "./Home"
export default [
    {
        path: '/admin',
        component: Admin
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: "/admin/review",
        component: Review
    },
    {
        path: "/admin/city",
        component: City
    },
    {
        path: "/admin/user",
        component: User
    },
    {
        path: "/admin/place",
        component: Place
    },

]

import Admin from "../scenes/Admin";
import City from "../scenes/Admin/City"
import Review from "../scenes/Admin/Review"
import Place from "../scenes/Admin/Place"
import User from "../scenes/Admin/User"

export default [
    {
        path: '/admin',
        component: Admin
    },
    {
        path: "/review",
        component: Review
    },
    {
        path: "/city",
        component: City
    },
    {
        path: "/user",
        component: User
    },
    {
        path: "/place",
        component: Place
    },

]

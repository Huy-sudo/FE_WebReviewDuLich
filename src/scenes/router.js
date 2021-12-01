import Admin from "../scenes/Admin";
import City from "../scenes/Admin/City"
import Review from "../scenes/Admin/Review"
import Place from "../scenes/Admin/Place"
import User from "../scenes/Admin/User"
import Home from "./Home"
import ReviewPage from "../scenes/Review/index"
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
    {
        path: "/reviewpage",
        component: ReviewPage
    }

]

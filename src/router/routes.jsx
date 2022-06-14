import About from "../pages/About";
import Delivery from "../pages/Delivery";
import Main from "../pages/Main";
import Payment from "../pages/Payment";


export const routes = [
    { path: "/main", component: Main },
    { path: "/about", component: About },
    { path: "/payment", component: Payment },
    { path: "/delivery", component: Delivery },
    { path: "/", component: Main },
]
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonies from './pages/Testionies';
import About from './pages/About';
import Tour from './pages/Tour';

export const routes = [
    {
        route: "/",
        name: "Home",
        exact: true,
        component: Home
    },
    {
        route: '/about',
        name: "About",
        component: About
    },
    {
        route: '/services',
        name: "Services",
        component: Services
    },
    {
        route: '/tour',
        name: "Site Tour",
        component: Tour
    },
    {
        route: '/testimonies',
        name: "Testimonies",
        component: Testimonies
    },
    {
        route: '/contact',
        name: "Contact",
        component: Contact
    }
]
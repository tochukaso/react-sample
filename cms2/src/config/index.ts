// icons
import HomeIcon from '@material-ui/icons/Home';
import PartsIcon from '@material-ui/icons/Apps';

// components
import Home from '../pages/Home';
import Parts from '../pages/Parts';

// interface
import RouteItem from '../model/RouteItem.model';

// define app routes
export const routes: Array<RouteItem> = [
    {
        key: "router-home",
        title: "Home",
        tooltip: "Home",
        path: "/",
        enabled: true,
        component: Home,
        icon: HomeIcon,
        appendDivider: true
    },
    {
        key: "router-parts",
        title: "Parts",
        tooltip: "Parts",
        path: "/",
        enabled: true,
        component: Parts,
        icon: PartsIcon,
        appendDivider: true
    },
]
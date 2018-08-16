import Dashboard from "views/Dashboard/Dashboard.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlert.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard.jsx";
import RegularTables from "views/Tables/RegularTables.jsx";
import ExtendedTables from "views/Tables/ExtendedTables.jsx";
import ReactTables from "views/Tables/ReactTables.jsx";
import GoogleMaps from "views/Maps/GoogleMaps.jsx";
import FullScreenMap from "views/Maps/FullScreenMap.jsx";
import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts/Charts.jsx";
import Calendar from "views/Calendar/Calendar.jsx";
import Widgets from "views/Widgets/Widgets.jsx";
import UserProfile from "views/Pages/UserProfile.jsx";
import TimelinePage from "views/Pages/Timeline.jsx";
import RTLSupport from "views/Pages/RTLSupport.jsx";
import Robots from "views/Robots/Robots.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";

var pages = [
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },/* Collapse example
  {
    collapse: true,
    path: "/robots",
    name: "Robots",
    state: "robots",
    icon: DeveloperBoard,
    views: [
      {
        path: "/robots/robots",
        name: "Robots",
        mini: "RB",
        component: Robots
      },
    ]
  },*/
  { path: "/robots", name: "Robots", icon: DeveloperBoard, component: Robots },
  { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;

/** 
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import DashboardUser from "layouts/User/dashboard";

import Tables from "layouts/tables";
import TablesUser from "layouts/User/tables";

import Billing from "layouts/billing";
import BillingUser from "layouts/User/billing";

import Notifications from "layouts/notifications";

import Profile from "layouts/profile";
import ProfileUser from "layouts/User/profile";

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import AR from "layouts/AR";
import ARUser from "layouts/User/AR";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "DashboardUser",
    key: "dashboarduser",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboarduser",
    component: <DashboardUser />,
  },
  {
    type: "collapse",
    name: "Equipos",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "EquiposUser",
    key: "tablesuser",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tablesUser",
    component: <TablesUser />,
  },
  {
    type: "collapse",
    name: "Ordenes",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "OrdenesUser",
    key: "billinguser",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billingUser",
    component: <BillingUser />,
  },
  {
    type: "collapse",
    name: "Notificaciones",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Perfil",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "PerfilUser",
    key: "profileuser",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <ProfileUser />,
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "AR",
    key: "Ar",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/AR",
    component: <AR />,
  },
  {
    type: "collapse",
    name: "ArUser",
    key: "aruser",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/ArUser",
    component: <ARUser />,
  },
];

export default routes;

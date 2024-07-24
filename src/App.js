import * as React from "react";
import { useSelector } from 'react-redux';
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {   StyledEngineProvider } from "@mui/material";
import {
  mainListItems,
  secondaryListItems,
} from "./components/ListItem/ListItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

import UserScreen from "./views/User/UserScreen";
import DashboardScreen from "./views/Dashboard/DashboardScreen";
import CustomerScreen from "./views/Customer/CustomerScreen";
import OrderScreen from "./views/Order/OrderScreen";
import InventoryScreen from "./views/Inventory/InventoryScreen";
import DistributionRouteScreen from "./views/DistributionRoute/DistributionRouteScreen";
import ArticleResumeScreen from "./views/ArticleResume/ArticleResumeScreen";
import SalesResumeScreen from "./views/SalesResume/SalesResumeScreen";

// defaultTheme
import themes from './themes';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Gestion de Pedidos
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 250;

function App() {
  const defaultTheme = createTheme();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  //const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
      <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<DashboardScreen />} />
              <Route path="users" element={<UserScreen />} />
              <Route path="orders" element={<OrderScreen />} />
              <Route path="customers" element={<CustomerScreen />} />
              <Route path="inventory" element={<InventoryScreen />} />
              <Route
                path="distribution-routes"
                element={<DistributionRouteScreen />}
              />
              <Route path="sales-summary" element={<SalesResumeScreen />} />
              <Route
                path="distribution-summary"
                element={<ArticleResumeScreen />}
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

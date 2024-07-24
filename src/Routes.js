import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components/RouteWithLayout/RouteWithLayout";
import { Main as MainLayout } from "./layouts/Main";

import UserScreen from "./views/User/UserScreen";
import DashboardScreen from "./views/Dashboard/DashboardScreen";
import CustomerScreen from "./views/Customer/CustomerScreen";
import OrderScreen from "./views/Order/OrderScreen";
import InventoryScreen from "./views/Inventory/InventoryScreen";
import DistributionRouteScreen from "./views/DistributionRoute/DistributionRouteScreen";
import ArticleResumeScreen from "./views/ArticleResume/ArticleResumeScreen";

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />

      <RouteWithLayout
        component={DashboardScreen}
        exact
        layout={MainLayout}
        path="/dashboard"
      />

      <RouteWithLayout
        component={UserScreen}
        exact
        layout={MinimalLayout}
        path="/users"
      />

      <RouteWithLayout
        component={OrderScreen}
        exact
        layout={MainLayout}
        path="/orders"
      />

      <RouteWithLayout
        component={InventoryScreen}
        exact
        layout={MainLayout}
        path="/inventory"
      />

      <RouteWithLayout
        component={CustomerScreen}
        exact
        layout={MinimalLayout}
        path="/customers"
      />

      <RouteWithLayout
        component={DistributionRouteScreen}
        exact
        layout={MinimalLayout}
        path="/distribution-routes"
      />

      <RouteWithLayout
        component={ArticleResumeScreen}
        exact
        layout={MainLayout}
        path="/distribution-summary"
      />

      <RouteWithLayout
        component={DistributionRouteScreen}
        exact
        layout={MainLayout}
        path="/reports/orders/sales/summary"
      />
    </Switch>
  );
};

export default Routes;

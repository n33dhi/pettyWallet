import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminHeader from "./Admin/Components/AdminHeader";
import UserHeader from "./User/Components/UserHeader";
import UserDashboard from "./User/Pages/UserDashboard";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import History from "./Admin/Pages/History";
import Users from "./Admin/Pages/Users";
import UserProfile from "./Admin/Pages/UserProfile";
import Login from "./Auth/Login";
import RequestForm from "./User/Pages/RequestForm";
import RequestHistory from "./User/Pages/RequestHistory";

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "Roboto", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>

          {/* User Route */}
          <Route path="/cashQuester">
            <UserHeader />
            <Switch>
              <Route path="/cashQuester/requestForm" exact>
                <RequestForm />
              </Route>
              <Route path="/cashQuester/history" exact>
                <RequestHistory />
              </Route>
              <Route exact path="/cashQuester">
                <UserDashboard />
              </Route>
            </Switch>
          </Route>

          {/* Admin Route */}
          <Route path="/cashMaster">
            <AdminHeader />
            <Switch>
              <Route path="/cashMaster/history" exact>
                <History />
              </Route>
              <Route path="/cashMaster/users" exact>
                <Users />
              </Route>
              <Route path="/cashMaster/users/:userId" exact>
                <UserProfile />
              </Route>
              <Route exact path="/cashMaster">
                <AdminDashboard />
              </Route>
            </Switch>
          </Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

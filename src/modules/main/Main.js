import React, { Component } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import Home from "../../pages/home/Home";
import NotFound from "../../pages/notfound/NotFound";
import Profile from "../../pages/profile/Profile";
import { useSubscribe } from "../../App";

const AuthContextProvider = () => {
  
}

const PrivateRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useSubscribe();
  console.log(isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

class Main extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    // console.log("Main log", this.props);
    return (
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route element={<PrivateRoute />}>
            <Route exact path="/profile" element={<Profile />} />
          </Route>
          {/* <Route
            exact
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Main;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import "./Header.css";

function Header() {
  const [user, setUser] = useState({});
  const [didMount, setDidMount] = useState(true);

  useEffect(() => {
    // componentDidMount
    if (didMount) {
      setDidMount(false);
    }

    // componentWillUnmount
    return function cleanup() {
      setUser("");
    };
  }, [didMount]);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const checkLogin = () => {
    if (user) {
      return <button onClick={handleLogout}>Logout</button>;
    } else {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="header">
      <span className="logo">
        <h1>Example</h1>
      </span>
      <span className="list-menu">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </span>
      <div className="login-profile">
        {/* <button>Login</button> */}
        {checkLogin()}
      </div>
    </div>
  );
}

export default Header;

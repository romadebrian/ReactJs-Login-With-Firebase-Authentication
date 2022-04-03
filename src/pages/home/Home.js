import React, { Component } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default class Home extends Component {
  _isMounted = false;

  state = {
    user: {},
  };

  componentDidMount() {
    this._isMounted = true;

    onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      if (this._isMounted) {
        this.setState({
          user: currentUser,
        });
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // console.log(this.state.user);

    return (
      <div>
        <h1>Home</h1>
        <p>Welcome to example reactJs login with firebase</p>
        <p>also use react-router and redux </p>
        <p> User Login : {this.state.user?.email}</p>
      </div>
    );
  }
}

import React, { useEffect, useState } from "react"; //rcc
import { auth } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // componentDidMount

    const unsubs = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
    });

    // componentWillUnmount
    return () => unsubs;
  });

  return (
    <div>
      <h1>Profile User</h1>
      <p>Email : {auth.currentUser?.email}</p>
      <p>UID : {user?.uid}</p> {/* {user?.uid} */}
    </div>
  );
}

export default Profile;

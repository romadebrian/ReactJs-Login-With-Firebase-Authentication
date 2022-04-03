import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./modules/main/Main";
import Login from "./modules/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

let datauser = null;

const subs = onAuthStateChanged(auth, (data) => {
  datauser = data;
});

export const useSubscribe = () => {
  subs();
  const user = datauser;

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, setUser);
  //   unsubscribe();

  //   return () => unsubscribe;
  // }, []);

  console.log("test", user);

  return { isAuthenticated: user != null };
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main />} />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

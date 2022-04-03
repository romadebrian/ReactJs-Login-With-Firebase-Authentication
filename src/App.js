import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Main from "./modules/main/Main";
import Login from "./modules/login/Login";

function App(props) {
  console.log(props);
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Main dataUserMain={props.dataUser} />} />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

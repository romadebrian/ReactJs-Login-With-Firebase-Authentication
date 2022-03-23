import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

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

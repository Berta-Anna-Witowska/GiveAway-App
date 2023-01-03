import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import SignOut from "./components/SignOut";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logowanie" element={<SignIn />} />
        <Route path="/rejestracja" element={<SignUp />} />
        <Route path="/wylogowano" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;

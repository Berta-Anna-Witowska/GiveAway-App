import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./views/Home";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import SignOut from "./views/SignOut";
import GiveAway from "./views/GiveAway";
import UserPanel from "./views/UserPanel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logowanie" element={<SignIn />} />
        <Route path="/rejestracja" element={<SignUp />} />
        <Route path="/wylogowano" element={<SignOut />} />
        <Route path="/oddaj-rzeczy" element={<GiveAway />} />
        <Route path="/panel" element={<UserPanel />} />
      </Routes>
    </Router>
  );
}

export default App;

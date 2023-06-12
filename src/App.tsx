import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useContext } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Details from "./components/Details";
import AuthContext from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />;
          <Route path="/me" element={user ? <Details /> : <Main />} />;
          <Route path="/user/:to" element={<Details />} />;
          <Route path="*" element={<Navigate to="/" />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

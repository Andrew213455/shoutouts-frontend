import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import ListOfShoutouts from "./components/ListOfShoutouts";
import Shoutout from "./models/Shoutout";
import { getAllShoutouts } from "./services/shoutoutApiService";
import NewSOForm from "./components/NewSOForm";
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

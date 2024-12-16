import React, { useState } from "react";
import Login from "./components/Login/Login";
import CreatePothole from "./components/CreatePothole/CreatePothole";
import Notification from "./components/Notification/Notification";
import "../src/App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div>
        <div className="header">
          <h1>Pothole Management System</h1>
        </div>
        <Routes>
          {/* Route login */}
          <Route
            path="/login"
            element = {<Login setToken={setToken}/>}
          />

          {/* Route Add Pothole */}
          <Route
            path="/addpothole"
            element = {
              token ? <CreatePothole token={token}/>:<Navigate to="/login" replace/>
            }
          />

          {/* Route Default */}
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

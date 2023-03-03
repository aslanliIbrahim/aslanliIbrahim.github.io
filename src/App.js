import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router basename="/proxy-brand-tt">
      <Routes />
    </Router>
  );
}

export default App;

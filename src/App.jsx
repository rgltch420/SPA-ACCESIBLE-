import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import FirstView from "./components/FirstView";
import Services from "./components/Services";
import Revolucionando from "./components/Revolucionando";
import CreateProject from "./components/CreateProject";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Login from "./components/Login";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      
      <Header onOpenModal={() => setShowLogin(true)} />
      
  
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FirstView />
              <Services />
              <Revolucionando />
              <CreateProject />
              <Plans />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

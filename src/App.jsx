import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import FirstView from "./components/FirstView";
import Services from "./components/Services";
import Revolucionando from "./components/Revolucionando";
import CreateProject from "./components/CreateProject";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import CreateProjectPage from "./pages/createProjectPage"

import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}

export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
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
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <CreateProjectPage />
              </PrivateRoute>
            }
          />


        </Routes>
      </Router>
    </AuthProvider>

  );
}

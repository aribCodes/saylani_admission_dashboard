import React from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/Context.jsx";
import LoginPage from "./pages/LoginPage";
import Dash from "./Dashboard";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <AppContext>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/admin" element={<ProtectedRoute><Dash /></ProtectedRoute>} />
          </Routes>
      </AppContext>
    </div>
  );
}

export default App;

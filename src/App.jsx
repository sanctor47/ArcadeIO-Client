// import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RankingPage from "./pages/RankingPage";
import ScanPage from "./pages/ScanPage";
import SignupPage from "./pages/SignupPage";

const RouteGaurd = () => {
  const auth = localStorage.getItem("token")
  // const auth = "7409327509327";
  // const auth = null;
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route element={<RouteGaurd />}>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ranking" element={<RankingPage />} />
        <Route exact path="/prizes" element={<RankingPage />} />
        <Route exact path="/scan" element={<ScanPage />} />
      </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;

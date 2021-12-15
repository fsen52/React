import React, { useState } from "react";
import { StoreContext } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [user, setUser] = useState({});

  const isUserLogin = (params) => {
    return Object.keys(user).length > 0;
  };

  return (
    <StoreContext.Provider value={{ user, setUser, isUserLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;

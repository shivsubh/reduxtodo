import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Todo from "./components/Todo";
import AuthProvider from "./contexts/AuthContext";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <div className="w-100" style={{ maxwidth: "400px" }}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Todo />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;

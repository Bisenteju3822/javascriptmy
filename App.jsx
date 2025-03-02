import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Service from "./pages/Service";
import Protected from "./Protected";
import { useState } from "react";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={<Login authorized={setIsAuthenticated} />}
            />
            <Route
              path="about"
              element={
                <Protected setAuthorization={isAuthenticated}>
                  <About />
                </Protected>
              }
            />
            <Route
              path="service"
              element={
                <Protected setAuthorization={isAuthenticated}>
                  <Service />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

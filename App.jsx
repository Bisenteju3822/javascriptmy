import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Display from "./Display";
import Insert from "./Select";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/insert" element={<Insert />}></Route>
          <Route path="/display" element={<Display />}></Route>
        </Route>
      </Routes>
    </>
  );
};
export default App;

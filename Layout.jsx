import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <hr></hr>
      <nav>
        <ul
          style={{
            display: "flex",
            color: "blue",
            gap: "30px",
            textDecoration: "none",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <hr></hr>
    </>
  );
};

export default Layout;

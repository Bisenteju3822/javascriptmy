import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          listStyle: "none",
          padding: "10px 0",
          margin: "0",
          width: "100%",
          background: "#f0f0f0", // Add a background color if needed
          borderBottom: "1px solid #ccc", // Add a border for separation
        }}
      >
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/insert">Insert</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
      </ul>
      <main style={{ marginTop: "20px", width: "100%", maxWidth: "1200px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

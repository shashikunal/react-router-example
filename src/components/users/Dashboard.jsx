import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <main className="dashboard-content">
        <ul>
          <li>
            <Link
              to={{
                pathname: "/",
                search: "", // a String of query string parameter
                state: { name: "shashi" },
                hash: "", //suffix / prefix with hash
              }}
              // to="/"
              // className={({ isActive }) => (isActive === true ? "active" : "")}
            >
              PRODUCTS
            </Link>
            <Link
              // to="/users"
              // className={({ isActive }) => (isActive === true ? "active" : "")}
              to={{
                pathname: "/users",
                search: "?sort=name",
                state: { name: "dixith" },
                hash: "#hash",
              }}
            >
              USERS
            </Link>
            <Link
              // to="/players"
              // className={({ isActive }) => (isActive === true ? "active" : "")}
              to={{
                pathname: "/players",
                search: "?sort=players",
                state: { name: "sachin " },
                hash: "#hash",
              }}
            >
              Players
            </Link>
          </li>
        </ul>
      </main>

      <Outlet />
    </div>
  );
};

export default Dashboard;

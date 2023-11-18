import { Outlet } from "react-router-dom";
import NavbarContainer from "../pages/sidenavbar/NavbarContainer";

const Root = () => {
  return (
    <section id="dashboard">
      <article className="container">
        <aside className="sidebar">
          <NavbarContainer />
        </aside>
        <aside className="content">
          <Outlet />
        </aside>
      </article>
    </section>
  );
};

export default Root;

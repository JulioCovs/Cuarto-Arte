import { Outlet } from "react-router-dom";
import "../index.css";

function Layout() {
  return (
    <div className="darkTheme">
      <Outlet />
    </div>
  );
}

export default Layout;
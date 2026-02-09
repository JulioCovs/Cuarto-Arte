import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../index.css";

function Layout() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={theme === "dark" ? "darkTheme" : "lightTheme"}>
      {/* Botón para cambiar tema */}
      <button onClick={toggleTheme} style={{ position: "absolute", top: 20, right: 20 }}>
        Cambiar tema
      </button>

      {/* Líneas doradas */}
      <div className="background-lines"></div>

      {/* Contenido de páginas */}
      <Outlet />
    </div>
  );
}

export default Layout;

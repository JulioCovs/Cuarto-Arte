import { useState } from "react";

function Login({ onLogin }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "1234") {
      onLogin();
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <h1>Cuarto Arte</h1>
      <h2>Iniciar sesión</h2>

      <input
        type="text"
        placeholder="Usuario"
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPass(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;

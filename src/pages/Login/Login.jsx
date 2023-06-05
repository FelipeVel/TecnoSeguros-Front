import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage-container">
        <div className="LoginPage-Info">
          <Card
            className="LoginPage-Info-Card"
            title="Inicia sesión"
            description="Ingresa tu correo y contraseña para acceder a tu cuenta."
            imagePosition="right"
          />
        </div>
        <form className="LoginPage-Form" onSubmit={(e) => submitHandler(e)}>
          <div className="LoginPage-Form-Input">
            <input
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="LoginPage-Form-Input">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="LoginPage-Form-Button">
            <button type="submit">Iniciar sesión</button>
          </div>
          <div className="LoginPage-Form-Link">
            ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

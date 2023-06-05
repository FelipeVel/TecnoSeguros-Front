import "./Register.scss";

const Register = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Register");
    };

  return (
    <div className="RegisterPage">
      <div className="RegisterPage-Container">
        <div className="RegisterPage-Login">
          <div className="RegisterPage-Login-Title">¿Ya tienes una cuenta?</div>
          <div className="RegisterPage-Login-Subtitle">
            Inicia sesión <a href="/login">aquí</a>
          </div>
        </div>
        <div className="RegisterPage-Register">
          <div className="RegisterPage-Register-Form">
            <div className="RegisterPage-Register-Form-Title">
              Crea una cuenta
            </div>
            <form className="RegisterPage-Register-Form-Content" onSubmit={(e) => submitHandler(e)}>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="number">Número de documento</label>
                <input type="text" inputMode="numeric" name="cc" id="cc" />
              </div>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="number">Número de celular</label>
                <input
                  type="text"
                  inputMode="numeric"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" />
              </div>
              <div className="RegisterPage-Register-Form-Content-Input">
                <label htmlFor="role">Rol</label>
                <div className="RegisterPage-Register-Form-Content-Input-List">
                  <div className="RegisterPage-Register-Form-Content-Input-List-Item">
                    <input type="radio" name="role" id="role" value="user" />
                    Usuario
                  </div>
                  <div className="RegisterPage-Register-Form-Content-Input-List-Item">
                    <input type="radio" name="role" id="role" value="agent" />
                    Agente
                  </div>
                </div>
              </div>
              <div className="RegisterPage-Register-Form-Content-Submit">
                <button type="submit">Registrarme</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

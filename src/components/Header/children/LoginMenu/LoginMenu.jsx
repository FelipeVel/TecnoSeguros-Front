import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faAddressCard, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LoginMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtons = (
    <div className="header__auth">
        <a href="/login">
            <FontAwesomeIcon icon={faRightToBracket} />
            Iniciar sesión
        </a>
        <a href="/register">
            <FontAwesomeIcon icon={faAddressCard} />
            Registrarse
        </a>
    </div>
  );
  return (
    <div className="header__login-menu">
        <button
            className="header__login-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {isMenuOpen && menuButtons}
    </div>
    );
};

export default LoginMenu;

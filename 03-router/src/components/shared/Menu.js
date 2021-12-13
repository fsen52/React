import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/"> Ana Sayfa </Link>
      <Link to="/about">Hakkımızda </Link>
      <Link to="/contact"> Iletisim</Link>
    </div>
  );
};

export default Menu;

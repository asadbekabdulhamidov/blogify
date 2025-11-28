import React from "react";

import { Link } from "react-router-dom";

//images
import Logo from "../../assets/svg/logo.svg";
import Button from "../ui/Button";

const Navbar: React.FC = () => {
  return (
    <nav className="align-center">
      <div>
        <img src={Logo} alt="site logo " />
      </div>

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/login"}>
          <Button variant="primary" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";

import { Link } from "react-router-dom";

//images
import Logo from "../../assets/svg/logo.svg";
import Button from "../ui/Button";

//icons
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

//components
import Sidebar from "./Sidebar";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="align-center flex items-center justify-between py-4.5">
        <div>
          <img src={Logo} alt="site logo " />
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {!isOpen ? (
              <FaBars className="text-primary-500 h-6 w-6" />
            ) : (
              <FaXmark className="text-primary-500 h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            className="font-inter text-text-secondary text-[14px] font-medium"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="font-inter text-text-secondary text-[14px] font-medium"
            to={"/posts"}
          >
            Posts
          </Link>
          <Link to={"/auth"}>
            <Button variant="primary" size="lg">
              Login
            </Button>
          </Link>
        </div>
      </nav>
      {isOpen && <Sidebar />}
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Sidebar: React.FC = () => {
  return (
    <div className="align-center flex flex-col gap-5 md:hidden">
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
      <Link to={"/admin"}>
        <Button className="w-full" variant="primary" size="lg">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;

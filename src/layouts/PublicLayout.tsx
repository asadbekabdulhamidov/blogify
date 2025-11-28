import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const PublicLayout: React.FC = () => {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default PublicLayout;

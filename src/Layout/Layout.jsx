import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import Footer from "../Component/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

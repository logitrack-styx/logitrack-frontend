import { Outlet } from "react-router";
import Navbar from "../includes/Navbar";
import Footer from "../includes/Footer";

export default function MainLayout() {
  return (
    <div className="main-layout">
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
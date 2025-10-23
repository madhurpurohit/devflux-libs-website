import { Outlet } from "react-router";
import { Header } from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { SystemTheme } from "./SystemTheme";

export const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <SystemTheme />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

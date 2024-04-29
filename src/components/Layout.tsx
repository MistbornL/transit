import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Toaster />
        <Outlet />
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

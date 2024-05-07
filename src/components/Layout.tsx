import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
// import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div>
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

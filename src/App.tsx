import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { NotFound } from "./components/NotFound";

function App() {
  // const isAuthenticated = useIsAuthenticated();
  // const token: any = Cookies.get("auth");
  // const decoded: TokenPayload = token && jwtDecode(token);
  // const [role, setRole] = useState<boolean>(false);
  // const signOut = useSignOut();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     setRole(decoded.is_admin);
  //   }
  // }, [role]);

  // useEffect(() => {
  //   const checkTokenExpiration = () => {
  //     if (token) {
  //       const currentTime = Date.now() / 1000;

  //       if (decoded.exp < currentTime) {
  //         console.log("Token expired. Logging out...");
  //         signOut();
  //         navigate("/");
  //         window.location.reload();
  //       } else {
  //         // Token is still valid
  //         console.log("Token is still valid.");
  //         const expirationTime = (decoded.exp - currentTime) * 1000;
  //         const timeoutId = setTimeout(() => {
  //           console.log("Token expired. Logging out...");
  //           signOut();
  //           navigate("/");
  //           window.location.reload();
  //         }, expirationTime);

  //         // Cleanup the timeout when the component is unmounted
  //         return () => clearTimeout(timeoutId);
  //       }
  //     }
  //   };

  //   checkTokenExpiration();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

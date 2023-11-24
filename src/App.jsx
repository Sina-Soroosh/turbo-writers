import Header from "./components/Header/Header";
import { useLocation, useRoutes } from "react-router-dom";
import router from "./router.jsx";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  const routes = useRoutes(router);
  const url = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [url]);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;

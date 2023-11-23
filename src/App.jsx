import { useState } from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import router from "./router.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  const routes = useRoutes(router);

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;

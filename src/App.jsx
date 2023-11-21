import { useState } from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import router from "./router";

function App() {
  const routes = useRoutes(router);

  return (
    <>
      <Header />
      {routes}
    </>
  );
}

export default App;

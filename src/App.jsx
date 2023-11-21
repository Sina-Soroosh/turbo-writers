import { useState } from "react";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;

import React from "react";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="App h-screen">
      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
};

export default App;
 
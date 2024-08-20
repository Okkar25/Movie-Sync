import React, { useEffect, useState } from "react";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
      // document.body.classList.add("bg-gray-900");
    } else {
      document.documentElement.classList.remove("dark");
      // document.body.classList.remove("bg-gray-900");
    }
  }, [darkMode]);

  return (
    <div className="App h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <AllRoutes />

      <Footer />
    </div>
  );
};

export default App;

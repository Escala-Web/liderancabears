import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../view/Home/Home";
import NotFound from "../view/NotFound/NotFound";
import Policy from "../view/Policy";
import { showPosition } from "../api/ip";

const AppRoutes = () => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname !== currentPath) {
      setCurrentPath(location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.error("❌ Geolocalização não suportada pelo navegador.");
    }
  }, [location, currentPath]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<Policy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;

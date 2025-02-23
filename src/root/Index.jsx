import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { navbar } from "../utils/navbar";
import NotPage from "../pages/notFound/index";
import useTitle from "../hooks/useTitle";

function Index() {
  const [pageTitle, setPageTitle] = useState("Cryptveil");
  const location = useLocation();

  useTitle(pageTitle);

  useEffect(() => {
    const currentNavItem = navbar.find(
      ({ path }) =>
        path === location.pathname ||
        (path === "*" && location.pathname.includes(path))
    );

    if (currentNavItem) {
      setPageTitle(currentNavItem.title);
    } else {
      setPageTitle("404 Not Found");
    }
  }, [location.pathname]);

  return (
    <Routes>
      {navbar.map(({ path, element, id }) => (
        <Route key={id} path={path} element={element} />
      ))}
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}

export default Index;

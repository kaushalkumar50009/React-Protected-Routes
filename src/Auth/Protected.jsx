import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Protected = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user info exists in localStorage
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      // If user info exists, set authenticated to true
      setAuthenticated(true);
    } else {
      // If no user info, navigate to the login page
      navigate("/login");
    }
  }, [navigate]);

  // Render children only if authenticated
  return <>{authenticated ? <Outlet /> : null}</>;
};

export default Protected;

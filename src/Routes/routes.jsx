import React from "react";
import { Route, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Protected from "../Auth/Protected";
import { Dashboard, HomePage, Login, Setting } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<HomePage />} />
      <Route path="login" element={<Login />} />

      {/* Wrapped in <Protected> component to check authentication before rendering Dashboard and Setting components. */}
      <Route element={<Protected />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="setting" element={<Setting />} />
      </Route>
    </Route>
  )
);

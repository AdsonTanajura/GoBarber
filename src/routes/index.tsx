import React from "react";
import { createBrowserRouter } from 'react-router-dom';


import SingnIn from "../pages/SignIn";
import SingnUp from "../pages/SigninUp";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute >
            <SingnIn />
        </ProtectedRoute>
    )
    },
    {
        path: '/singnup',
        element: (
            <ProtectedRoute >
                <SingnUp />
            </ProtectedRoute>
        )
      },
      {
        path: '/dashboard',
        element: (
            <ProtectedRoute isPrivate>
                <Dashboard />
            </ProtectedRoute>
        )
      },
  ]);

export default router;
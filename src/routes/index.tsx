import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import SingnIn from "../pages/SignIn";
import SingnUp from "../pages/SigninUp";

const router = createBrowserRouter([
    {
      path: '/',
      element: <SingnIn/>
    },
    {
        path: '/singnup',
        element: <SingnUp/>
      },
  ]);

export default router;
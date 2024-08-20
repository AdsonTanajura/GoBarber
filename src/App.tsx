import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { customIsPropValid } from './utils/customIsPropValid';
import { RouterProvider } from 
'react-router-dom';

import GlobalStyles from './styles/global';
import router from './routes';
// import SingnUp from './pages/SigninUp';


import AppProvider from './hooks';

const App: React.FC = () => (
  <StyleSheetManager shouldForwardProp={customIsPropValid}>

    <AppProvider >
      <RouterProvider router={router}/>
    </AppProvider>

    <GlobalStyles />

  </StyleSheetManager>

);

export default App;

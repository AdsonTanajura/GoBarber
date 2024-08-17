import React from 'react';
import { StyleSheetManager } from 'styled-components';
import { customIsPropValid } from './utils/customIsPropValid';

import GlobalStyles from './styles/global';
import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SigninUp';


import AppProvider from './hooks';

const App: React.FC = () => (
  <StyleSheetManager shouldForwardProp={customIsPropValid}>

    <AppProvider >
      <SingnIn /> 
    </AppProvider>

    <GlobalStyles />

  </StyleSheetManager>

);

export default App;

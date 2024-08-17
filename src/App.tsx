import React from 'react';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import GlobalStyles from './styles/global';
import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SigninUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <AuthProvider >
      <SingnIn /> 
    </AuthProvider>
    <GlobalStyles />
  </StyleSheetManager>

);

export default App;

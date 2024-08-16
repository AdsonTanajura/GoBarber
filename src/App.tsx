import React from 'react';


import GlobalStyles from './styles/global';
import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SigninUp';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider >
      <SingnIn /> 
    </AuthProvider>
    <GlobalStyles />
  </>

);

export default App;

import React from 'react';


import GlobalStyles from './styles/global';
import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SigninUp';

import AuthContext from './context/AuthContext';


const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{name: 'Adson'}}>
      <SingnIn /> 
    </AuthContext.Provider>
    <GlobalStyles />
  </>

);

export default App;

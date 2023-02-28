import React, { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AuthorizationService from './components/AuthorizationService/AuthorizationService';
import Header from './components/Header/Header';
import Cabinet from './pages/Cabinet/Cabinet';
import Owner from './pages/Owner/Owner';
import Private from './pages/Private/Private';
import Public from './pages/Public/Public';
import User from './pages/User/User';
import { OWNER, PRIVATE, PUBLIC, USER } from './routes';

function App() {
  const [page, setPage] = useState<JSX.Element | undefined>(<Cabinet/>);
  
  const changePage = () => {
    const hash = window.location.hash
    switch (hash.slice(1)) {
      case OWNER:
        setPage(<Owner/>)
        return;
      case PUBLIC:
        setPage(<Public/>)
        return
      case PRIVATE:
        setPage(<Private/>)
        return
      case USER:
        setPage(<User/>)
        return
      default:
        setPage(<Cabinet/>)
        return;
    }
  }

  useEffect(() => {
    window.addEventListener('hashchange', changePage)
    return () => window.removeEventListener('hashchange', changePage)
  }, [])
  
  return (
    <div className="App">
      <AuthorizationService>
        <Header>
          {page}
        </Header>
      </AuthorizationService>
    </div>
  );
}

export default App;

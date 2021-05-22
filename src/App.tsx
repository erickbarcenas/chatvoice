import React from 'react';
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import RouterApp from './core/RouterApp';
import HeaderComponent from "./components/Header.component";
import { SocketProvider } from './context/SocketContext'
import './styles/App.scss';
import './i18n/i18n';

function App() {
    const history = createBrowserHistory();
  return (
      <SocketProvider>
          <Router history={history}>
              <RouterApp/>
          </Router>
      </SocketProvider>
  );
}

export default App;

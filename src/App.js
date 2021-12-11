import React, { Component } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import './App.css';
import AutoFlow from './AutoFlow/AutoFlow';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import * as cookie from './cookie'

cookie.setCookie('IEMSESSIONID', "tjnibhtt1n2pu072cgnorr2uvo", 5)
cookie.setCookie('IEM_CookieLogin', "YTozOntzOjQ6InVzZXIiO3M6MzoiMTQ0IjtzOjQ6InJhbmQiO3M6MTQ6IjE2MWIyMzJiYjQ4YWIzIjtzOjg6InRha2VtZXRvIjtzOjk6ImluZGV4LnBocCI7fQ%3D%3D",5)
// if (process.env.REACT_APP_IEMSESSIONID) {
// }

cookie.setCookie('IEM_SecureLogin', "YToyOntzOjQ6InVzZXIiO3M6MzoiMTQ0IjtzOjY6InNlY3VyZSI7czozMjoiYjk5N2I2MDViYWY3Y2Q0MzI2YzlmMDZhNGFlNmU5YzUiO30%3D",5)

class App extends Component {
  render() {
    return (
      <ReactFlowProvider>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/AutoFlow" element={<AutoFlow />} />
          </Routes>
        </HashRouter>
      </ReactFlowProvider>
    );
  }
}

export default App;
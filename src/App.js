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

console.log(cookie.getCookie())
cookie.setCookie('IEMSESSIONID', "7dje4lcl7rds75jhljv21r8ek2")
// if (process.env.REACT_APP_IEMSESSIONID) {
// }

cookie.setCookie('IEM_SecureLogin', "YToyOntzOjQ6InVzZXIiO3M6MzoiMTQ0IjtzOjY6InNlY3VyZSI7czozMjoiYjk5N2I2MDViYWY3Y2Q0MzI2YzlmMDZhNGFlNmU5YzUiO30%3D")

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
import React, { Component } from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import './App.css';
import AutoFlow from './AutoFlow/AutoFlow';
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <ReactFlowProvider>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AutoFlow" element={<AutoFlow />} />
          </Routes>
        </HashRouter>
      </ReactFlowProvider>
    );
  }
}

export default App;
import React, {Component} from 'react';
import {Route, Routes, Router} from 'react-router-dom';
import Main from "./page/main/Main";

class App extends Component{
  render() {
    return (
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
    );
  }
}

export default App;

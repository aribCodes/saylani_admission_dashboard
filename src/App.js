import React from 'react';
import {Route,Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Dash from './Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="admin" element={<Dash />}/>
      </Routes>
    </div>
  );
}

export default App;
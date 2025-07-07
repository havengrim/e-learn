
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Page from './app/dashboard/page';
import LoginPage from './app/login/page';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

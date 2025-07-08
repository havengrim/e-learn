
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Page from './app/dashboard/page';
import LoginPage from './app/auth/login';
import RegisterPage from './app/auth/register';
import ForgotPage from './app/auth/forgot';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Page />} />
        <Route path="/forgot-password" element={<ForgotPage /> } />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

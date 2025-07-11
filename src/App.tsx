
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Page from './app/dashboard/page';
import LoginPage from './app/auth/login';
import RegisterPage from './app/auth/register';
import ForgotPage from './app/auth/forgot';
import './index.css';
import Course from './app/course/[id]/Course';
import StudentProfile from './app/profile/student_profile';
import MyLearningsPage from './app/my-learning/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
         <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Page />} />
        <Route path="/forgot-password" element={<ForgotPage /> } />
        <Route path="/course" element={<Course />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/my-learning" element={<MyLearningsPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

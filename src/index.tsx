import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

/**********
 PAGES
 **********/
import App from './App';
import { CreateAccount } from './pages/CreateAccount';
import { Login } from './pages/Login';
import { Error } from './pages/Error';
import { ThankYou } from './pages/ThankYou';
import { Components } from './pages/Components';
import { Dashboard as DashboardStudent } from './pages/student/Dashboard';
import { Dashboard as DashboardTutor } from './pages/tutor/Dashboard';
import { Dashboard as DashboardAdmin } from './pages/admin/Dashboard';
import { StudentIndex } from './pages/student';
import { TutorIndex } from './pages/tutor';
import { AdminIndex } from './pages/admin';
import { SessionDashboard as StudentSessionDashboard } from './pages/student/sessions/SessionDashboard';
import { IndividualSession as StudentIndividualSession } from './pages/student/sessions/IndividualSession';
import { IndividualSession as TutorIndividualSession } from './pages/tutor/sessions/IndividualSession';
import { SessionDashboard as TutorSessionDashboard } from './pages/tutor/sessions/SessionDashboard';
import { AccountSettings as StudentAccountSettings } from './pages/student/AccountSettings';
import { AccountSettings as TutorAccountSettings } from './pages/tutor/AccountSettings';
import { AccountSettings as AdminAccountSettings } from './pages/admin/AccountSettings';
import { Students } from './pages/admin/Students';
import { Tutors } from './pages/admin/Tutors';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/404-error" element={<Error />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/components" element={<Components />} />
        {/* Student */}
        <Route path='/student' element={<StudentIndex />}>
          <Route index element={<DashboardStudent />} />
          <Route path='sessions'>
            <Route index element={<StudentSessionDashboard />} />
            <Route path=':id' element={<StudentIndividualSession />} />
          </Route>
          <Route path='account-settings' element={<StudentAccountSettings />} />
        </Route>
        {/* Tutor */}
        <Route path='/tutor' element={<TutorIndex />}>
          <Route index element={<DashboardTutor />} />
          <Route path='sessions'>
            <Route index element={<TutorSessionDashboard />} />
            <Route path=':id' element={<TutorIndividualSession />} />
          </Route>
          <Route path='account-settings' element={<TutorAccountSettings />} />
        </Route>
        {/* Admin */}
        <Route path='/admin' element={<AdminIndex />}>
          <Route index element={<DashboardAdmin />} />
          <Route path='account-settings' element={<AdminAccountSettings />} />
          <Route path='students' element={<Students />} />
          <Route path='tutors' element={<Tutors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import {LoginPage, UsersPage, BasicUser, HomePage, CreateCron, CronPage, ReportsPage} from './pages';
import ProtectedRoute from './components/protectedRoute';

import './App.css';

function App() {
  return (
    <main>
            <Router>
              <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/users" element={<ProtectedRoute allowedRoles={['admin', 'sub-admin']} ><UsersPage /></ProtectedRoute>}></Route>
                <Route path="crons" element={<ProtectedRoute allowedRoles={['admin', 'manager', 'sub-admin', 'user']} ><CronPage /></ProtectedRoute>}> 
                </Route>
                <Route path="/crons/create-cron" element={<ProtectedRoute allowedRoles={['admin']} ><CreateCron /></ProtectedRoute>}></Route>
                <Route path="/basic-user" element={<ProtectedRoute allowedRoles={['user']} ><BasicUser /></ProtectedRoute>}></Route>
                <Route path="/home" element={<ProtectedRoute allowedRoles={['manager', 'sub-admin', 'user', 'admin']} ><HomePage /></ProtectedRoute>}></Route>
                <Route path="/reports" element={<ProtectedRoute allowedRoles={['admin', 'manager']} ><ReportsPage /></ProtectedRoute>}></Route>
              </Routes>
            </Router>
    </main>
  );
}

export default App;




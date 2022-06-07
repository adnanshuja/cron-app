import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import {AuthProvider} from './helpers';
import AppRoutes from './appRoutes';
import './App.css';

function App() {
  return (
    <main>
      
        <Router>
        <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      
    </main>
  );
}

export default App;




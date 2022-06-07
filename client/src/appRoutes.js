import * as React from "react";
import { useRoutes } from "react-router-dom";
import { LoginPage, UsersPage, BasicUser, HomePage, CreateCron, CronPage, ReportsPage } from './pages';


function AppRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    { 
      path: "dashboard", 
      element: <HomePage allowedRoles={['manager', 'sub-admin', 'user', 'admin']}/>,
      children: [
        { path: 'basic-user', element: <BasicUser allowedRoles={['user']} /> },
        { path: 'users', element: <UsersPage allowedRoles={['admin', 'sub-admin']} /> },
        { path: 'crons', element: <CronPage allowedRoles={['admin', 'manager', 'sub-admin', 'user']} /> },
        { path: 'reports', element: <ReportsPage allowedRoles={['admin', 'manager']}  /> }
      ]
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return element;
}
export default AppRoutes;
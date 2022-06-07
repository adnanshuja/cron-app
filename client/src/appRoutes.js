import * as React from "react";
import { useRoutes } from "react-router-dom";
import { LoginPage, Users, BasicUser, Dashboard, CreateCron, CronPage, ReportsPage, Crons } from './pages';


function AppRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "dashboard",
      element: <Dashboard allowedRoles={['manager', 'sub-admin', 'user', 'admin']} />,
      children: [
        { path: 'basic-user', element: <BasicUser allowedRoles={['user']} /> },
        { path: 'users', element: <Users allowedRoles={['admin', 'sub-admin']} /> },
        {
          path: 'crons',
          element: <Crons allowedRoles={['admin', 'manager', 'sub-admin', 'user']} />,
          children: [{
            path: 'create',
            element: <CreateCron allowedRoles={['admin']} />
          }],
        },
        { path: 'reports', element: <ReportsPage allowedRoles={['admin', 'manager']} /> }
      ]
    },
    {
      path: "*",
      element: <LoginPage />,
    },
  ]);

  return element;
}
export default AppRoutes;
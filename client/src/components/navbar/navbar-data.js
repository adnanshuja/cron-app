import React from 'react';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <IoIcons.IoIosHome />,
        cName: 'nav-text',
        allowedRoles: ['admin', 'user', 'sub-admin', 'manager']
    },
    {
        title: 'Users',
        path: '/dashboard/users',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text',
        allowedRoles: ['admin', 'sub-admin']
    },
    {
        title: 'Jobs',
        path: '/dashboard/crons',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        allowedRoles: ['admin', 'user', 'sub-admin', 'manager']
    },
    {
        title: 'Basic User',
        path: '/dashboard/basic-user',
        icon: <IoIcons.IoIosBug />,
        cName: 'nav-text',
        allowedRoles: [ 'user']
    },
    {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <IoIcons.IoIosMap />,
        cName: 'nav-text',
        allowedRoles: ['admin', 'manager']
    },
    {
        title: 'Logout',
        path: '/login',
        icon: <IoIcons.IoIosLogOut />,
        cName: 'nav-text',
        allowedRoles: ['admin', 'user', 'sub-admin', 'manager']
    },
];
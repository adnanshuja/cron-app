import React, { Outlet } from 'react-router-dom';
import { CONSTANTS } from '../../helpers/constants';

function UsersPage() {
    return (
        <div>
            <h1>{CONSTANTS.pages.Users_List_Page.title}</h1>
            <Outlet />
        </div>
    );
}

export default UsersPage;

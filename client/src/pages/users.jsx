import React, { useEffect, useState, useContext } from "react";

import ListingTable from "../components/table/table";
import { apiClient, AuthContext } from '../helpers';

function UsersPage() {
    const [users, setUsers] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const userTableHeadings = [
        {
            title: 'User Name',
            permissions: ['all']
        },
        {
            title: 'Email', 
            permissions: ['all']
        },
        {
            title: 'Role', 
            permissions: ['all']
        },
        {
            title: 'Permissions', 
            permissions: ['all']
        },
        {
            title: 'Actions', 
            permissions: ['admin']
        }
    ];

    useEffect(() => {
        async function fetcUsers() {
            const { data } = await apiClient.get('auth/get-all')
            setUsers(data)
        }
        fetcUsers();
    }, []);

    return (
        <ListingTable headings={userTableHeadings} user={currentUser} data={users}  />
    );
}

export default UsersPage;

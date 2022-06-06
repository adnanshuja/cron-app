import React, { useEffect, useState } from "react";

import Layout from "../components/layout/layout";
import ListingTable from "../components/table/table";


import { apiClient } from '../helpers';
import { CONSTANTS } from "../helpers/constants";

function UsersPage() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function fetcUsers() {
            const { data } = await apiClient.get('auth/get-all')
            setUsers(data)
        }
        fetcUsers();
    }, []);

    return (
        <Layout title={CONSTANTS.pages.Users_List_Page.title} subTitle={CONSTANTS.pages.Users_List_Page.subTitle}>
           <div className="table-wrapper">
                            <table className="responsive-table">
                                <thead className="responsive-table__head">
                                    <tr className="responsive-table__row">
                                        <th className="responsive-table__head__title responsive-table__head__title--name">User
                                            Name</th>
                                        <th className="responsive-table__head__title responsive-table__head__title--email">Email
                                        </th>
                                        <th className="responsive-table__head__title responsive-table__head__title--role">Role
                                        </th>
                                        <th className="responsive-table__head__title responsive-table__head__title--permission">
                                            Permissions </th>
                                        <th className="responsive-table__head__title responsive-table__head__title--actions">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="responsive-table__body">
                                    {users.length ? users.map((user, index) => {
                                        return <tr className="responsive-table__row" key={index}>
                                            <td className="responsive-table__body__text responsive-table__body__text--name">{user.name}
                                            </td>
                                            <td className="responsive-table__body__text responsive-table__body__text--email">
                                                {user.email}</td>
                                            <td className="responsive-table__body__text responsive-table__body__text--role">{user.role}</td>
                                            <td className="responsive-table__body__text responsive-table__body__text--permission">
                                                {user.permissions.map((permission, i) => {
                                                    return <span className="permmission-indicator permmission-indicator--create" key={i}>{permission}</span>
                                                })}
                                            </td>
                                        </tr>

                                    }) : null}
                                </tbody>
                            </table>
                        </div>
        </Layout>

    );
}

export default UsersPage;

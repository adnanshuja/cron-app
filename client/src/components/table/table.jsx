import React from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';

import './table.css';
const ListingTable = ({ user, headings, data, children }) => {
    return (
        <div className="table-wrapper">
            <table className="responsive-table">
                <TableHead headings={headings} user />
                <TableBody data={data} children />
            </table>
        </div>
    );
};

export default ListingTable;
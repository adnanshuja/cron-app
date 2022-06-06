import React from 'react';
import './table.css';
import TableHead from './tableHead';
import TableBody from './tableBody';

const ListingTable = ({ user, headings, data, children }) => {
    return (
        <div className="table-wrapper">
            <table className="responsive-table">
                <TableHead headings={headings} user={user} />
                <TableBody data={data} />
                <div>{children}</div>
            </table>
        </div>
    );
};

export default ListingTable;
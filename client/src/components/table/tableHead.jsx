import React from 'react';
import TableRow from './tableRow.jsx';

const TableHead = ({ headings, user }) => {
    return (
        <thead className="responsive-table__head">
            <TableRow>
                {headings.length ? headings.map((heading, index) => {
                    return (heading.permissions.includes('all') || heading.permissions.includes(user.role)) ?
                        (
                            <th key={index} className="responsive-table__head__title responsive-table__head__title--name">
                                {heading.title}</th>
                        ) : null;
                }) : null}
            </TableRow>
        </thead>
    );
}

export default TableHead;
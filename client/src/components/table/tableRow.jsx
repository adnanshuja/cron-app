import React from 'react';

const TableRow = ({ children, key }) => {
    return (
        <tr className="responsive-table-row" key={key}>
            {children}
        </tr>
    );
}

export default TableRow;
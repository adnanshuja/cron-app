import React from 'react';

const TableRow = ({ children, cKey }) => {
    return (
        <tr className="responsive-table-row" key={cKey}>
            {children}
        </tr>
    );
}

export default TableRow;
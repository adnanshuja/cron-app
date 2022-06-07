import React from 'react';
import TableRow from './tableRow';
const TableBody = ({ data, children }) => {
    return (
        <tbody className="responsive-table__body">
        {data.length?data.map((obj,index)=>
        { return <TableRow cKey={index}>
            {
                Object.keys(obj).map((cKey, cIndex) => {
                    return Array.isArray(obj[cKey]) ? (
                        <td className="responsive-table__body__text responsive-table__body__text--permission" key={cIndex}>
                        {obj[cKey].map((permission, i)=>{
                            return <span className="permmission-indicator permmission-indicator--create" key={i}>{permission}</span> })}
                    </td>
                    ) : (
                        <td key={cIndex} className="responsive-table__body__text responsive-table__body__text--name">{obj[cKey]}
                    </td>
                    )
                })
            }
            {children}
            </TableRow>
            }):null}
        </tbody>
    );
}

export default TableBody;
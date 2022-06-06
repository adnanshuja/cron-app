import React from 'react';
import TableRow from './tableRow';
const TableBody = ({ data }) => {
    return (
        <tbody className="responsive-table__body">
        {data.length?data.map((obj,index)=>
        { return <TableRow key={index}>
            {
                Object.keys(obj).map((cKey, cIndex) => {
                    return Array.isArray(obj[cKey]) ? (
                        <td className="responsive-table__body__text responsive-table__body__text--permission" key={cIndex}>
                        {obj[cKey].map((permission, i)=>{
                            return <span className="permmission-indicator permmission-indicator--create" key={i}>{permission}</span> })}
                    </td>
                    ) : (
                        <td className="responsive-table__body__text responsive-table__body__text--name">{obj[cKey]}
                    </td>
                    )
                })
            }
            </TableRow>
            }):null}
        </tbody>
    );
}

export default TableBody;
import React from 'react'


const DepartementRow = (props) => {
    return(
        <tr>
            <th>{props.name}</th>
            <td>{props.count}</td>
        </tr>
    )
}

export default DepartementRow
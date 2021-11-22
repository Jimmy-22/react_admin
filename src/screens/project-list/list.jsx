import React from "react";

export const List = ({users, list}) => {
  return (<table>
    <thead>
      <tr>
        <th>负责人</th>
        <th>名称</th>
      </tr>
    </thead>
    <tbody>
    {
      list.map(item => <tr key={item}>
        <td>{item.name}</td>
        <td>{users.find(user => user.id === item.personId)?.name}</td>
      </tr>)
    }
    </tbody>
  </table>)
}

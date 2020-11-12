import React from "react";

export default function UserItem(props) {
  const { user } = props;
  //console.log(props);
  const handleAdd = () => {
    props.addUser(user);
  };
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.acount}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.sex}</td>
      <td>
        <button className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
      </td>
    </tr>
  );
}

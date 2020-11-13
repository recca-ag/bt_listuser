import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItem from "./../../components/userItem";

export default function ListUser() {
  let userList = useSelector((state) => state.userReducer.userList);

  const handleAddCart = (user) => {};
  const renderTable = () => {
    if (userList && userList.length > 0) {
      return userList.map((user) => {
        return <UserItem key={user.id} user={user} addUser={handleAddCart} />;
      });
    }
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>PhoneNumber</th>
            <th>Sex</th>
            <th>Add List User</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}

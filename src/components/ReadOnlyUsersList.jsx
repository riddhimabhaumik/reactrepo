import React from "react";

const ReadOnlyUsersList = ({ user, handleEditClick }) => {
  return (
    <tr key={user.id}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.username}</td>
    <td>{user.email}</td>
    <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
    <td>{user.phone}</td>
    <td>{user.website}</td>
    <td>{user.company.name}</td>
    <td>{user.company.catchPhrase}</td>
    <td>
        <button onClick={(event) => handleEditClick(event, user)}>Edit</button>
    </td>
    </tr>
  );
}

export default ReadOnlyUsersList;
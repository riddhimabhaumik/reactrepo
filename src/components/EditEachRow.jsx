import React from "react";

const EditEachRow = ({ editFormData, handleEditFormChange }) => {

  return (
    <tr>
      <td>{editFormData.id}</td>
      <td><input type="text" name="name" value={editFormData.name} onChange={handleEditFormChange} /></td>
      <td><input type="text" name="username" value={editFormData.username} onChange={handleEditFormChange} /></td>
      <td><input type="email" name="email" value={editFormData.email} onChange={handleEditFormChange} /></td>
      <td>{`${editFormData.address.street}, ${editFormData.address.suite}, ${editFormData.address.city}, ${editFormData.address.zipcode}`}</td>
      <td><input type="text" name="phone" value={editFormData.phone} onChange={handleEditFormChange} /></td>
      <td><input type="text" name="website" value={editFormData.website} onChange={handleEditFormChange} /></td>
      <td><input type="text" name="company.name" value={editFormData.company.name} onChange={handleEditFormChange} /></td>
      <td><input type="text" name="company.catchPhrase" value={editFormData.company.catchPhrase} onChange={handleEditFormChange} /></td>
      <td>
        <button type="submit" >Save</button>
      </td>
    </tr>
  );
}

export default EditEachRow;
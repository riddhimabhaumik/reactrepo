import React, {useEffect, useState} from "react";
import {listOfUsers} from "../store/ListOfUsers";
import ReadOnlyUsersList from "./ReadOnlyUsersList";
import EditEachRow from "./EditEachRow";

const ListOfUsersDataTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id:"",
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: ""
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: ""
    }
  });                 

  useEffect(() => {
    listOfUsers()
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log("Edit form change:", event.target);
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    const updatedUsers = users.map(user =>
      user.id === editFormData.id ? editFormData : user
    );
    setUsers(updatedUsers);
    setEditingIndex(null);
    setEditFormData({
      id: "",
      name: "",
      username: "",
      email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: ""
            },  
        phone: "", 
        website: "",
        company: {
            name: "",
            catchPhrase: ""
        }
    });
  };

  const handleEditClick = (event, user) => {
    event.preventDefault();
    setEditingIndex(user.id);
    const formData = {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode
      },
        phone: user.phone,
        website: user.website,
        company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase
        }

    };
    setEditFormData(formData);
  };



  return (
    <form onSubmit={handleSave}>
    <table border={1} cellPadding={8} cellSpacing={0}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th>Catch Phrase</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
        <>
        { editingIndex === user.id ? 
           ( <EditEachRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}/>) 
        :  (<ReadOnlyUsersList key={user.id} user={user}  handleEditClick = {handleEditClick}/>)} 
         </>
        ))}
      </tbody>
    </table>
    </form>
  );
} 
export default ListOfUsersDataTable;
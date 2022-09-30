import React from "react";
import db from './firebase.config'

export const UserInput = ({ user }) => {
    const [firstName, setName] = React.useState(user.firstName);
    const [lastName, setName2] = React.useState(user.lastName);
  
  
    const onUpdate = () => {
      db.collection('userProfile').doc(user.id).set({...user, firstName})
      db.collection('userProfile').doc(user.id).set({...user, lastName})
    }

  const onDelete = () => {
    db.collection('userProfile').doc(user.id).delete()
  }

  return (
    <>
      <input
        value={firstName}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <input
        value={lastName}
        onChange={e => {
          setName2(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
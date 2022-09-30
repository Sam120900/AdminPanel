import React from "react";
import firebase from './firebase.config'

export const UserInput = ({ user }) => {
  const [firstName, setName] = React.useState(user.firstName);
  const [lastName, setName2] = React.useState(user.lastName);


  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('userProfile').doc(user.id).set({...user, firstName})
    db.collection('userProfile').doc(user.id).set({...user, lastName})
  }

  const onDelete = () => {
    const db = firebase.firestore()
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
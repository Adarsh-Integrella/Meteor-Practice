import React from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactCollection.find({}).fetch(); //Tracker
  })
  return (
    <>
      <h3>Contact List</h3>
      {contacts.map(c => (
          
        <li key={c.Email}>
          {c.Name} - {c.Email}
        </li>
      ))}
    </>
  );
};

import React from "react"; 
import { useState } from 'react'
import { useEffect } from 'react'

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const dummyContact = { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" };

    const [contact, setContact] = useState(dummyContact);
    useEffect(() => {
        async function fetchContact() {
            try {
              const response = await fetch(`${API_URL}/${selectedContactId}`);
              const result = await response.json();
              console.log("Results: ", result);
              setContact(result);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContact();
    },[]);

    console.log("Contact: ", contact);
    return (
        <div>
            <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
            <h1>{contact.name}</h1>
            <h2>{contact.email}</h2>
            <h2>{contact.phone}</h2>
        </div>
    );
}
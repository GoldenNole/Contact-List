import React from "react"; 
import { useState } from 'react'
import { useEffect } from 'react'

const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const dummyContact = {
  "id": 1,
  "name": "Mrs. Jerald Schulist",
  "username": "Antwan",
  "email": "Coby_Zieme@libby.tv",
  "address": {
    "street": "Morissette Heights",
    "suite": "Apt. 633",
    "city": "Port Liashire",
    "zipcode": "04270",
    "geo": {
      "lat": "27.7501",
      "lng": "-83.1776"
    }
  },
  "phone": "(663)839-3814 x845",
  "website": "arvel.io",
  "company": {
    "name": "D'Amore-Krajcik",
    "catchPhrase": "Down-sized empowering Graphic Interface",
    "bs": "extend cross-media relationships"
  }
};

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
            <h1>{contact.name}</h1>
            <h2>{contact.email}</h2>
            <h2>{contact.phone}</h2>
            <h2>{contact.website}</h2>
            <h2>{contact.company.name}</h2>
            <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
        </div>
    );
}
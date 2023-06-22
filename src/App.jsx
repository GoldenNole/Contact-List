import { useState } from 'react'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'
import './App.css'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <div>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App

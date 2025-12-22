import "./App.css";
import { useState, useEffect } from "react";
import { ContactsEditor } from "./components/ContactsEditor/ContactsEditor";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const exists = contacts.some(
      (c) => c.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts((prev) => [
      ...prev,
      { id: `id-${Date.now()}`, name, number },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prev) =>
      prev.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactsEditor onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={(e) => setFilter(e.target.value)} />

      <ContactsList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );
}

export default App;

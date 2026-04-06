import { useState } from "react";

export const ContactsEditor = ({ onSubmit }) => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ name: "", number: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Number:
        <input
          type="text"
          name="number"
          value={contact.number}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <button type="submit">Add contact</button>
    </form>
  );
};
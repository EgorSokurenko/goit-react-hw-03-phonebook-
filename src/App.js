import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/";
import ContactList from "./components/ContactList/";
const shortid = require("shortid");

const useContactsLocalStorage = (key) => {
  console.log(window.localStorage.getItem(key));
  const [state, setState]=useState(()=>{
    return JSON.parse(window.localStorage.getItem(key)) ?? [] })
  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state))
  },[key,state])
  return [state, setState]
}

export default function App () {
  const [contacts, setContacts] = useContactsLocalStorage('contacts')
  const [filter, setFilter] = useState('')
  const onDeliteContact = (id) => {
    setContacts(s=>contacts.filter((contact) => contact.id !== id))
  };
  const onFilter = (e) => {
    setFilter(e.currentTarget.value)
    
  };
   const addContact = (name, number) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(s=>[contact, ...contacts])
  };

  const changeFilter = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const VisibleContacts = changeFilter()
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={onFilter} />
        <ContactList
          contacts={VisibleContacts}
          onDeliteContact={onDeliteContact}
        />
      </div>
    );
}

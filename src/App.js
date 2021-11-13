import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/";
import ContactList from "./components/ContactList/";
const shortid = require("shortid");

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount(){
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)
    this.setState({contacts:parseContacts})
  }
  componentDidUpdate(prevProps,prevState){
    if(prevState.contacts!==this.state.contacts){
      localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }
  onDeliteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  onFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  addContact = (name, number) => {
    if (
      this.state.contacts.find(
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
    this.setState((prevState) => ({
      contacts: [contact, ...this.state.contacts],
    }));
  };

  changeFilter = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const visibleContacts = this.changeFilter();
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeliteContact={this.onDeliteContact}
        />
      </div>
    );
  }
}

export default App;

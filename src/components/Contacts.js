import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "henry@gmail.com",
        phone: "111-111-1111"
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;

    // Create a copy of the state without the one with the matching ID
    const newContacts = contacts.filter(contact => contact.id !== id);

    // Set the new contacts state with the newContacts object
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            id={contact.id}
            deleteClickHandler={this.deleteContact}
          /> // pass all the values in contact object
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;

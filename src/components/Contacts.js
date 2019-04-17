import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
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
    return (
      <Consumer>
        {value => {
          const { contacts } = value; // props that came from contetx.js
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
        }}
      </Consumer>
    );
  }
}

export default Contacts;

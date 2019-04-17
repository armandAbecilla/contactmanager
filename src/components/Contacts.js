import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value; // props that came from contetx.js
          return (
            <React.Fragment>
              {/* You could also use value.contacts.map */}
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} id={contact.id} /> // pass all the values in contact object
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;

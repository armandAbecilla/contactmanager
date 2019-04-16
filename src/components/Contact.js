import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  state = {
    showContactInfo: true
  };

  render() {
    const { name, email, phone } = this.props.contact; // Kaya ganito kase Object na ung pinapasa mo
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;

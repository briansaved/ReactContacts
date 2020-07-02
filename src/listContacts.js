import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };
  render() {
    return (
      <ol className="contactList">
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`,
              }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button
              onClick={() => this.props.onDeleteContact(contact)} //click calls onDelete
              className="contact-remove"
            >
              Remove
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;

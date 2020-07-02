import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    //enclosed all in the class
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  };

  state = {
    //introduction of state , cannot kkep using function
    query: "", //default query being empty string
  };

  updateState = (term) => {
    //Method that updates the state from search
    this.setState(() => ({
      query: term.trim(), //Trim removes all the spaces form both sides
    }));
  };

  render() {
    //with the below, we dont have to write this.state.query
    //in the code anymore, or this.props.contacts etc
    const { query } = this.state; //destructures
    const { contacts, onDeleteContact } = this.props;

    return (
      <div className="list-contacts">
        {/* {JSON.stringify(this.state)} To monitor real time state*/}
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contact"
            value={query} //The Value of the field determined by state
            onChange={(event) => this.updateState(event.target.value)} //method
          />
        </div>
        <ol className="contactList">
          {contacts.map((contact) => (
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
                onClick={() => onDeleteContact(contact)} //click calls onDelete
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;

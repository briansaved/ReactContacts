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

  clearQuery = () => {
    this.updateState("");
  };

  render() {
    //with the below, we dont have to write this.state.query
    //in the code anymore, or this.props.contacts etc
    const { query } = this.state; //destructures
    const { contacts, onDeleteContact } = this.props;

    const showingContacts =
      query === "" //if nothing in the search field
        ? contacts //showingContacts will be equal to contacts
        : contacts.filter((
            c //else filter each contact
          ) => c.name.toLowerCase().includes(query.toLowerCase()));
    //which includes the query in lowercase in the name!

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

        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              Now showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}
        <ol className="contactList">
          {showingContacts.map((
            contact //mapping over showinContacts instead of contacts
          ) => (
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

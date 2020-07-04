import React, { Component } from "react";
import ListContacts from "./listContacts";
import * as ContactsAPI from "./utils/ContactsAPI";

class App extends Component {
  state = {
    contacts: [],
  };

  //API Fetch request is put in the method compDidMount instead of living in State
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      //API Call made returns a Promise
      this.setState({
        //The data is then set in state
        contacts,
      });
    });
  }
  //Using SetState to remove a contact
  removeContact = (contact) => {
    //receives the contact argurment after click
    this.setState((currentState) => ({
      //set state with currentState arg
      contacts: currentState.contacts.filter((c) => c.id !== contact.id),
    })); //Filter returns all contacts except the one clicked in new array
  };

  render() {
    return (
      <div>
        <ListContacts //onDeleteContact is accessed by ListContacts
          onDeleteContact={this.removeContact} //inturn calls on removeContact
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;

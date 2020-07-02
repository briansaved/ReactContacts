import React, { Component } from "react";
import ListContacts from "./listContacts";

class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "@karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "@richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
      {
        id: "tyler",
        name: "Takudzwa Chidarikire",
        handle: "@tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ],
  };

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

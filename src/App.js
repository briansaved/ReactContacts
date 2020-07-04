import React, { Component } from "react";
import ListContacts from "./listContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";

class App extends Component {
  state = {
    contacts: [],
    screen: "list", //added a key to use for state display to add contact
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
    //Remove method now removes contact from both state and from Backend API
    ContactsAPI.remove(contact); //simply by adding this line
  };

  render() {
    return (
      <div>
        {this.state.screen === "list" && ( //condition met for list display
          <ListContacts //onDeleteContact is accessed by ListContacts
            onDeleteContact={this.removeContact} //inturn calls on removeContact
            contacts={this.state.contacts}
            onNavigate={() => {
              //The Prop that is accessed from List contact
              this.setState(() => ({
                screen: "create", //on click, sets state to trigger UI for add
              }));
            }}
          />
        )}
        {this.state.screen === "create" && <CreateContact />}
      </div> //condition above for creating contact instead
    );
  }
}

export default App;

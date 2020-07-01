import React /*,  { Component } */ from "react";
import PropTypes from "prop-types";
// class ListContacts extends Component {
//   render() {
//     // console.log("Props", this.props);
//     return (
//       <ol className="contactList">
//         {this.props.contacts.map((contact) => (
//           <li key={contact.id} className="contact-list-item">
//             <div
//               className="contact-avatar"
//               style={{
//                 backgroundImage: `url(${contact.avatarURL})`,
//               }}
//             />
//             <div className="contact-details">
//               <p>{contact.name}</p>
//               <p>{contact.handle}</p>
//             </div>
//             <button className="contact-remove">Remove</button>
//           </li>
//         ))}
//       </ol>
//     );
//   }
// }

function ListContacts(props) {
  return (
    <ol className="contactList">
      {props.contacts.map((contact) => (
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
            onClick={() => props.onDeleteContact(contact)} //click calls onDelete
            className="contact-remove"
          >
            Remove
          </button>
        </li>
      ))}
    </ol>
  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;

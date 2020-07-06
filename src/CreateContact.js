import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from "form-serialize";

class CreateContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault(); //prevents form from Default behavior so we ctrl everything
    const values = serializeForm(e.target, { hash: true }); //do it
    // console.log(values); //tests to see if serialize works

    if (this.props.onCreateContact) {
      this.props.onCreateContact(values);
    }
  };
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">
          Close
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxHeight={64}
          />
          <div className="create-contact-details">
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="handle" placeholder="@Black Oracle" />
            <button>Add Contact</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateContact;

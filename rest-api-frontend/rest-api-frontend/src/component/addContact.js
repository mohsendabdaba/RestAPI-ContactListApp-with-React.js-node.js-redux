import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AddContact extends Component {
  holderChange = event => {
    this.setState({
       [event.target.name]: event.target.value 
      });
  };
  // routeChange = () => {
  //   let path = `/contact`;
  //   this.props.history.push(path);
  // };
  onSubmit = () => {
    const obj = this.state;
    axios
      .post("/add-contact", obj)
      .then(data => console.log("goood"))
      .catch(err => console.log("cannot add contact"));
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div
        className="contact-input-container "
        style={{ flexDirection: "column" }}
      >
        <h1> add contact</h1>
        <div className="contact-input">
          <input placeholder="name" name="name" onChange={this.holderChange} />
          <input
            placeholder="email"
            name="email"
            onChange={this.holderChange}
          />
          <input
            placeholder="telephone"
            name="phone"
            onChange={this.holderChange}
          />
          <button onClick={this.onSubmit}>add</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddContact);

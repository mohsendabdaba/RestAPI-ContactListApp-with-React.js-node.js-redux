import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ModifyContact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    id: ""
  };
  holderChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = () => {
    console.log("dalet");
    const obj = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    };
    axios
      .put(`/update-contact/${this.props.index}`,obj)
      .then(data => console.log("goood"))
      .catch(err => console.log(err, "cannot add contact"));
    this.props.history.push("/contact");
  };

  componentDidMount = () => {
    axios
      .get(`/get-modify-contact/${this.props.index}`)
      .then(res =>
        this.setState({
          name: res.data.name,
          phone: res.data.phone,
          email: res.data.email,
          id: res.data._id
        })
      )
      .catch(err => console.log("cannot add contact"));
  };
  render() {
    return (
      <div
        className="contact-input-container "
        style={{ flexDirection: "column" }}
      >
        <h1> modify contact</h1>
        <div className="contact-input">
          <input
            placeholder={this.state.name}
            name="name"
            onChange={this.holderChange}
          />
          <input
            placeholder={this.state.email}
            name="email"
            onChange={this.holderChange}
          />
          <input
            placeholder={this.state.phone}
            name="phone"
            onChange={this.holderChange}
          />
          <button onClick={this.onSubmit}>modify</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ModifyContact);

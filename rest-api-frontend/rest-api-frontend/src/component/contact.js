import React, { Component } from "react";
import axios from "axios";
import { getList } from "../action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Contact extends Component {
  componentDidMount = () => {
    axios
      .get("/contact-list")
      .then(res => this.props.getList(res.data))
      .catch(err => console.log(err));
  };
  componentDidUpdate = () => {
    axios
      .get("/contact-list")
      .then(res => this.props.getList(res.data))

      .catch(err => console.log(err));
  };

  deletContact = id => {
    axios
      .delete(`/delete-contact/${id}`)
      .then(data => console.log("contact deleted"))
      .catch(err => console.log("cannot deleted"));
  };
  render() {
    return (
      <div className="contactList">
        {this.props.contacts.map((item, index) => {
          return (
            <div key={index} className="contactBox">
              <h2 style={{ justifyContent: "spaceBetween" }}>{item.name} </h2>
              <h2>{item.email}</h2>
              <h2>{item.phone}</h2>
              <Link to={`/modify-Contact/${item._id}`}>
               <button>Edit</button>
              </Link>
              <button onClick={() => this.deletContact(item._id)}> Delete </button>
            </div>
          );
        })}
      </div>

  
  )
    }
  }
    
const mapStateToProps = state => {
  return {
    contacts: state
  };
};
export default connect(
  mapStateToProps,
  { getList }
)(Contact);

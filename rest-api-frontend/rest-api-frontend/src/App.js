import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Contact from "./component/contact";
import AddContact from "./component/addContact";
import ModifyContact from "./component/modifyContact";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/contact"> Contact </Link>
        <Link to="/add-contact"> Add contact </Link>
      </div>
      <div>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/add-contact" render={() => <AddContact />} />
        <Route exact path="/modify-Contact/:id"
        render={props => <ModifyContact index={props.match.params.id} />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

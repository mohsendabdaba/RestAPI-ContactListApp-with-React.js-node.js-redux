const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");
const app = express();

app.use(bodyParser.json());

/** db config */

const MongoUrl = "mongodb://localhost:27017";
const dataBase = "contactList";

MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(err, null, "dataBase connection failed");
  const db = client.db(dataBase);

  app.post("/add-contact", (req, res) => {
    const newContact = req.body;
    console.log(newContact);
    db.collection("listcontact").insertOne(newContact, (err, data) => {
      if (err) res.send("cannot add contact");
      else res.send(data);
    });
  });

  app.get("/contact-list", (req, res) => {
    db.collection("listcontact")
      .find()
      .toArray()
      .then(data => res.send(data))
      .catch(err => res.send("cannot get contact list"));
  });
  app.delete("/delete-contact/:x", (req, res) => {
    const id = ObjectID(req.params.x);
    db.collection("listcontact")
      .findOneAndDelete({ _id: id })
      .then(data => res.send("contact delted"))
      .catch(err => res.send("cannot delet contact"));
  });

  app.get("/get-modify-contact/:x", (req, res) => {
    const id = ObjectID(req.params.x);

    db.collection("listcontact")
      .findOne({ _id: id })
      .then(data => res.send(data))
      .catch(err => res.send("cannot find contact"));
  });

  app.put("/update-contact/:id", (req, res) => {
    const id = ObjectID(req.params.id);
    const updateContact = req.body;
    console.log(req.params.id, "id update");
    db.collection("listcontact").findOneAndUpdate(
      { _id: id },
      { $set: { ...updateContact } },
      (err, data) => {
        if (err) res.send(err);
        else res.send(data);
      }
    );
  });
});

app.listen(3000, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 3000");
});




const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

const mongoURL = "mongodb://mongo:27017";
const dbName = "notesDB";

let db;
MongoClient.connect(mongoURL)
  .then((client) => {
    db = client.db(dbName);
    console.log("MongoDB connected");
  })
  .catch(console.error);

app.post("/notes", async (req, res) => {
  const { text } = req.body;
  const note = { text, createdAt: new Date() };
  await db.collection("notes").insertOne(note);
  res.send({ message: "Note saved!" });
});

app.get("/notes", async (req, res) => {
  const notes = await db.collection("notes").find().toArray();
  res.send(notes);
});

app.listen(3000, () => console.log("Server running on port 3000"));

import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
//const mongoose = require("mongoose");
//const { config } = require("dotenv");
const app = express();

const PORT = 8000;

app.use(express.json());

// app.get("/api/articles/:name", async (req, res) => {
//   const articleName = req.params.name;
//const mongoDB = "mongodb://localhost:27017/my-blog";

//   const client = await mongoose.connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   const db = client.db("my-blog");

//   const articleInfo = await db
//     .collection("articles")
//     .findOne({ name: articleName });
//   res.status(200).json(articleInfo);

//   client.close();

//   //Get the default connection
//   const db_check = mongoose.connection;

//   //Bind connection to error event
//   db_check.on(
//     "error",
//     console.error.bind(console, "MongoDB connection error:")
//   );
// });

//connecting mongodb

app.get("/api/articles/:name", async (req, res) => {
  try {
    const articleName = req.params.name;

    // const client = await mongoose.connect("mongodb://localhost:27017", {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   });
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
    });
    const db = client.db("my-blog");

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);

    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
});

//up voting end point
app.post("/api/articles/:name/upvote", (req, res) => {
  const articleName = req.params.name;

  articlesInfo[articleName].upvotes += 1;
  res
    .status(200)
    .send(
      `${articleName} now has ${articlesInfo[articleName].upvotes} upvotes`
    );
});

//add comments end point
app.post("/api/articles/:name/add-comment", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({ username, text });

  res.status(200).send(articlesInfo[articleName]);
});

app.listen(PORT, () => {
  console.log(`Port is listen at ${PORT}!`);
});

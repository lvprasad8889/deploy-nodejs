const express = require("express");
// const dns = require("dns");
// dns.setServers(["8.8.8.8", "8.8.4.4", "0.0.0.0"]);
const app = express();
const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb://lvprasad:lvprasad@cluster-shard-00-00.bl0oe.mongodb.net:27017,cluster-shard-00-01.bl0oe.mongodb.net:27017,cluster-shard-00-02.bl0oe.mongodb.net:27017/?ssl=true&replicaSet=atlas-1lnx91-shard-0&authSource=admin&appName=CLUSTER",
);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Hello Wrorld!");
});

app.get("/symboisis", (req, res) => {
  res.send("Hello symboisis!");
});

app.get("/satya", (req, res) => {
  res.send("Hello satya!");
});

app.get("/get-users", (req, res) => {
  res.send("Users fetched successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

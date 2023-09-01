const mongoose = require("mongoose");
const productSchema = require("../models/productSchema");
const logisticSchema = require("../models/logisticSchema");
const rankingSchema = require("../models/rankingSchema");

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const username = encodeURIComponent("machad721");
const password = encodeURIComponent("CdIFkjddhM1ar7PK");
const cluster = "logistics-cluster";
const database = "logistics";
const authMechanism = "<authMechanism>";

const newURI = `mongodb+srv://${username}:${password}@${cluster}.y6c8dms.mongodb.net/${database}?&authSource=admin&retryWrites=true&w=majority`;
const oldURI = `mongodb://${username}:${password}@ac-cxptbgp-shard-00-00.y6c8dms.mongodb.net:27017,ac-cxptbgp-shard-00-01.y6c8dms.mongodb.net:27017,ac-cxptbgp-shard-00-02.y6c8dms.mongodb.net:27017/logistics?ssl=true&replicaSet=atlas-143uug-shard-0&authSource=admin&retryWrites=true&w=majority`;

const conn = mongoose.createConnection(process.argv[2] === "2" ? oldURI : newURI, options);

try {
  conn.on("open", () => {
    console.log("Connected to MongoDB");
  });
} catch (error) {
  console.log("Error: " + error);
}

//Faz a chamada da database correta.
const ProductModel = conn.model("product", productSchema);
const LogisticModel = conn.model("logistics", logisticSchema);
const RankingModel = conn.model("ranking", rankingSchema);

module.exports = conn;

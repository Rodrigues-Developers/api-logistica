const mongoose = require("mongoose");
const productSchema = require("../models/productSchema");

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// };

const username = encodeURIComponent("machad721");
const password = encodeURIComponent("CdIFkjddhM1ar7PK");
const cluster = "logistics-cluster";
const authSource = "admin";
const authMechanism = "<authMechanism>";

const DB_CONECTION = `mongodb+srv://${username}:${password}@${cluster}.y6c8dms.mongodb.net/?retryWrites=true&w=majority`;

const conn = mongoose.createConnection(DB_CONECTION, options); 

//Se der errado olhar esta linha
const ProductModel = conn.model("product", productSchema);

module.exports = conn;

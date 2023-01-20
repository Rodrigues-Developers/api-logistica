const connection = require("./productConnection");

const Products = connection.models["Product"];

module.exports = {
  async index(req, res) {
    const data = await Products.find();
    return res.json(data);
    // return res.send("Login")
  },
};

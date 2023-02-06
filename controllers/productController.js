const connection = require("./productConnection");
const Products = connection.models["product"];

module.exports = {
  async index(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    const data = await Products.find();
    return res.json(data);
  },
  async show(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    const data = await Products.findById(req.params.id);
    return res.json(data);
  },
};

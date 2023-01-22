const connection = require("./productConnection");

const Products = connection.models["product"];

module.exports = {
  async index(req, res) {
    const data = await Products.find();
    console.log(data);
    return res.json(data);
  },
  async show(req, res) {
    const data = await Products.findById(req.params.id);
    return res.json(data);
  },
};

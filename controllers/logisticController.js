const connection = require("./connection");
const Logistics = connection.models["logistics"];

module.exports = {
  async index(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    const data = await Logistics.find();
    return res.json(data);
  },
  async show(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    const data = await Logistics.findById(req.params.id);
    return res.json(data);
  },
};

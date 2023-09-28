const { ObjectId } = require("mongodb");
const connection = require("./connection");
const Ranking = connection.models["ranking"];



module.exports = {
  async index(req, res) {

    const data = await Ranking.find();
    return res.json(data);
  },
  async show(req, res) {

    const data = await Ranking.findById(req.params.id);
    return res.json(data);
  },

  async store(req, res) {
    let newRankItem = req.body;
    newRankItem._id = new ObjectId();
    newRankItem.date = new Date();

    try {
      Ranking.create(newRankItem).then((result) => {});

      return res.status(200).json(newRankItem); // Return the created item
    } catch (err) {
      return res.status(500).json({ error: "Erro ao salvar o score. " });
    }
  },
};

const { ObjectId } = require("mongodb");
const connection = require("./connection");
const Ranking = connection.models["ranking"];



module.exports = {
  async index(req, res) {
    // res.setHeader("Access-Control-Allow-Origin", allowedOrigins);
    const data = await Ranking.find();
    return res.json(data);
  },
  async show(req, res) {
    // res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    const data = await Ranking.findById(req.params.id);
    return res.json(data);
  },

  async store(req, res) {
    console.log("chegou no Post");
    let newRankItem = req.body;
    newRankItem._id = new ObjectId();
    newRankItem.date = new Date();

    try {
      Ranking.create(newRankItem).then((result) => {});

      return res.status(200).json(newRankItem); // Retorna o item criado
    } catch (err) {
      return res.status(500).json({ error: "Erro ao salvar o score. " });
    }
  },
};

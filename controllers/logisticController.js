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

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns Database answer
   */
  async store(req, res) {
    let newLogisticItem = req.body;

    try {
      Logistics.create(newLogisticItem).then((result) => {});
      return res.status(200).json(newLogisticItem);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao salvar Logistic." });
    }
  },

  async update(req, res) {
    await Logistics.findById(req.params.id, req.body, {
      new: true,
    })
      .then((result) => {
        return res.json({ success: true, message: "Article Updated" });
      })
      .catch((err) => ({ success: false, message: err.message }));
    //TODO Analyze da node project to see how to do this
  },

  async destroy(req, res) {
    await Logistics.findByIdAndDelete(req.params.id)
      .then((result) => {
        return res.json({
          success: true,
          message: "Article Deleted",
        });
      })
      .catch((err) => {
        return res.json({
          success: false,
          message: err.message,
        });
      });
  },
};

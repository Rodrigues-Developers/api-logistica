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
   * Store function
   * @param {*} req
   * @param {*} res
   * @returns Database answer
   */
  async store(req, res) {
    let newLogisticItem = req.body;

    try {
      Logistics.create(newLogisticItem).then((result) => {});
      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json({ error: "Erro ao salvar Logistic." });
    }
  },

  /**
   * Update function
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      const updateLogistics = await Logistics.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!updateLogistics) {
        return res
          .status(404)
          .json({ success: false, message: "Logistics not found." });
      }

      return res.json({
        success: true,
        message: "Logistics updated successfully",
      });

    } catch (err) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  /**
   * Delete function
   * @param {*} req
   * @param {*} res
   */
  async destroy(req, res) {
    await Logistics.findByIdAndDelete(req.params.id)
      .then(() => {
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

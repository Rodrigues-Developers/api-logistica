const connection = require("./connection");
const Company = connection.models["company"];
const url = process.argv[2] === "local" ? "http://localhost:4200" : "https://transporte-logistica.vercel.app";

module.exports = {
  async index(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    const data = await Company.find();
    return res.json(data);
  },

  async show(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    const data = await Company.findById(req.params.id);
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
      const result = await Company.create(newLogisticItem);
      return res.status(200).json(result); // Retornar o resultado da criação
    } catch (err) {
      console.error(err); // Registrar o erro no console para depuração
      return res.status(500).json({ error: "Erro ao salvar Company." });
    }
  },

  /**
   * Update function
   * @param {*} req
   * @param {*} res
   */
  async update(req, res) {
    try {
      const updateCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updateCompany) {
        return res.status(404).json({ success: false, message: "Company not found." });
      }

      return res.json({
        success: true,
        message: "Company updated successfully",
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
    await Company.findByIdAndDelete(req.params.id)
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

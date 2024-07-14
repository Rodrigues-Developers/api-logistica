const connection = require("./connection");
const Products = connection.models["product"];
const url = process.argv[2] === "local" ? "http://localhost:4200" : "https://transporte-logistica.vercel.app";

module.exports = {
  async index(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    const data = await Products.find();
    return res.json(data);
  },
  async show(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    const data = await Products.findById(req.params.id);
    return res.json(data);
  },

  async store(req, res) {
    let newProductItem = req.body;

    try {
      Products.create(newProductItem).then((result) => {
        return res.status(200).json(result);
      });
    } catch (err) {
      console.log(err);
      if(err.code === 11000){
        return res.status(499).json({error: "Product already exists."})
      }
      return res.status(500).json({ error: "Erro ao salvar Product." });
    }
  },

  async update(req, res) {
    try {
      const updatedProduct = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: "Product not found." });
      }

      return res.json({
        success: true,
        message: "Product updated successfully.",
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  async destroy(req, res) {
    await Products.findByIdAndDelete(req.params.id)
      .then((result) => {
        return res.json({ success: true, message: "Article Deleted" });
      })
      .catch((err) => {
        return res.json({ success: false, message: err.message });
      });
  },
};

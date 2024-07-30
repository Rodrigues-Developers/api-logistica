const connection = require("./connection");
const Products = connection.models["product"];
const url =
  process.argv[2] === "local"
    ? "http://localhost:4200"
    : "https://transporte-logistica.vercel.app";

module.exports = {
  async index(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    try {
      const data = await Products.find();
      return res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching products." });
    }
  },

  async show(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    try {
      const data = await Products.findById(req.params.id);
      if (!data) {
        return res.status(404).json({ error: "Product not found." });
      }
      return res.json(data);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error fetching product." });
    }
  },

  async store(req, res) {
    let newProductItem = req.body;
    res.setHeader("Access-Control-Allow-Origin", url);

    try {
      const result = await Products.create(newProductItem);
      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      if (err.code === 11000) {
        const uniqueFieldValue = err.keyValue.factory_code;
        const existingProduct = await Products.findOne({
          factory_code: uniqueFieldValue,
        });
        return res.status(409).json({
          error: "Product already exists.",
          existingProduct: existingProduct,
        });
      }
      return res.status(500).json({ error: "Erro ao salvar Product." });
    }
  },

  async update(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    console.log("Update request received: ", req.params.id, req.body);
    try {

      const updatedProduct = await Products.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

      if (!updatedProduct) {
        return res
          .status(404)
          .json({ success: false, message: "Product not found." });
      }

      return res.json({
        success: true,
        message: "Product updated successfully.",
        updatedProduct,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  async destroy(req, res) {
    res.setHeader("Access-Control-Allow-Origin", url);
    try {
      await Products.findByIdAndDelete(req.params.id);
      return res.json({ success: true, message: "Article Deleted" });
    } catch (err) {
      console.log(err);
      return res.json({ success: false, message: err.message });
    }
  },
};

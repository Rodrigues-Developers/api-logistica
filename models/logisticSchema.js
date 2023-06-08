const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID do produto é obrigatório"],
    },
    nfe: {
      type: String,
      required: [true, "Número da NF é obrigatória"],
    },
    emissionNf: {
      type: Date,
      required: [true, "Data de emissão da NF é obrigatória"],
    },
    shipping_company: {
      type: String,
      required: [true, "Valor do produto é obrigatório"],
    },
    arrival_forecast: {
      type: Date,
    },
    date_out: {
      type: Date,
    },
    merchandise: {
      type: [Object],
      required: [true, "Valor do produto é obrigatório"],
    },
    nfe_value: {
      type: Number,
      required: [true, "Deve fazer parte de um Sub Grupo."],
    },
    note: {
      type: String,
      required: [true, "Valor do produto é obrigatório"],
    },
    pin_release: {
      type: Date,
      required: [true, "Valor do produto é obrigatório"],
    },
    status: {
      type: String,
      required: [true, "Valor do produto é obrigatório"],
    },
  },
  { collection: "logistics" }
);

module.exports = productSchema;

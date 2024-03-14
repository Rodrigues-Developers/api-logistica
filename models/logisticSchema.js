const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userNoteSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const productSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID da nota é obrigatório."],
    },
    nfe: {
      type: String,
      required: [true, "Número da NF é obrigatória."],
    },
    emissionNf: {
      type: Date,
      required: [true, "Data de emissão da NF é obrigatória."],
    },
    shipping_company: {
      type: String,
      required: [true, "Informação de transporte é obrigatório."],
    },
    arrival_forecast: {
      type: Date,
    },
    date_out: {
      type: Date,
    },
    merchandise: {
      type: [Object],
      required: [true, "A nota deve conter produtos."],
    },
    nfe_value: {
      type: Number,
      required: [true, "O valor da nota é obrigatório."],
    },
    note: {
      type: [userNoteSchema], // Using the custom type here
    },
    pin_release: {
      type: Date,
    },
    status: {
      type: String,
      required: [true, "Valor do produto é obrigatório"],
    },
  },
  { collection: "logistics" }
);

module.exports = productSchema;

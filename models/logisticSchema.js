const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    operation: {
      type: Date,
      required: [true, "Data de emissão da NF é obrigatória."],
    },
    emission_date: {
      type: Date,
      required: [true, "Informação de transporte é obrigatório."],
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Informação de transporte é obrigatório"],
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
    },
    transporter: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "A nota deve conter produtos."],
    },
    freight: {
      type: Number,
      required: [true, "O valor da nota é obrigatório."],
    },
    discount: {
      type: Number,
    },
    total_product_value: {
      type: Number,
    },
    total_note_value: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"],
    },
    arrival_forecast: { 
      Type: Date,
     },
    date_out: { 
      Type: Date,
     },
    bulk: { 
      Type: Number,
     },
    shipping_on_account: { 
      Type: Boolean,
     },
    merchandise: { 
      Type: [mongoose.Schema.Types.ObjectId],
     },
    note: { 
      Type: String,
     },
    pin_release: { 
      Type: Date,
     },
    status: { 
      Type: String,
     },
  },
  { collection: "logistics" }
);

module.exports = productSchema;

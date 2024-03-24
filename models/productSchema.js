const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID do produto é obrigatório"],
    },
    nfeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID da nota é obrigatório"],
    },
    description: {
      type: String,
      required: [true, "Nome do produto é obrigatório"],
    },
    amount: {
      type: Number,
      required: [true, "Quantidade do produto é obrigatória"],
    },
    price: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"],
    },
    group: {
      type: String,
      
    },
    brand: {
      type: String,
     
    },
    factory_code: {
      type: Number,
      required: [true, "Valor do produto é obrigatório"],
    },
    sub_group: {
      type: String,
    },
    sys_code: {
      type: Number,
    
    },
  },
  { collection: "product" }
);

module.exports = productSchema;

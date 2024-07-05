const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID de Company é Obrigatório"],
    },
    name: {
      type: String,
      require: [true, "O Nome da empresa é obrigatório."],
    },
    cnpj: {
      type: String,
      require: [true, "O CNPJ da empresa é obrigatório."],
      unique: true,
    },
    uf: {
      type: String,
      require: [true, "A UF da empresa é obrigatório."],
    },
    type: {
      type: String,
      require: [true, "O Tipo da empresa é obrigatório."],
    },
    color: {
      type: String,
    },
  },
  { collection: "company" }
);

module.exports = companySchema;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const company = new Schema({
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
  },
  uf: {
    type: String,
    require: [true, "A UF da empresa é obrigatório."],
  },
  type: {
    type: String,
    require: [true, "O Tipo da empresa é obrigatório."],
  },
});

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
    key: {
      type: String,
      required: [true, "A chave da nota é obrigatória."],
    },
    operation: {
      type: String,
      required: [true, "Data de emissão da NF é obrigatória."],
    },
    emission_date: {
      type: Date,
      required: [true, "Informação de transporte é obrigatório."],
    },
    supplier: {
      type: company,
      required: [true, "Informação de fornecedor é obrigatório"],
    },
    receiver: {
      type: company,
      required: [true, "Informação de destinatário é obrigatório"],
    },
    transporter: {
      type: company,
      required: [true, "A Transportador conter produtos."],
    },
    freight: {
      type: Number,
      required: [true, "O Transportador é obrigatório."],
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
      type: Date,
    },
    date_out: {
      type: Date,
    },
    bulk: {
      type: Number,
    },
    shipping_on_account: {
      type: Boolean,
    },
    merchandise: {
      type: [mongoose.Schema.Types.ObjectId],
    },
    note: {
      type: [userNoteSchema], // Using the custom type here
    },
    pin_release: {
      type: Date,
    },
    status: {
      type: String,
    },
  },
  { collection: "logistics" }
);

module.exports = productSchema;

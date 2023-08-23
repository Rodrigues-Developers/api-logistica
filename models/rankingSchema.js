const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rankingSchema = new Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "ID do produto é obrigatório"],
    },
    name: {
      type: String,
      required: [true, "Nome é obrigatório"],
    },
    date: {
      type: Date,
      required: [true, "Data é obrigatória"],
    },
    score: {
      type: String,
      required: [true, "Score é obrigatório"],
    },
  },
  { collection: "games" }
);

module.exports = rankingSchema;

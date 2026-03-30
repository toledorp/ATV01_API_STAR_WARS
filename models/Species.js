import mongoose from "mongoose";

// o campo "description" será um documento aninhado
// const descriptionSchema = new mongoose.Schema({
//     height: Number,
//     mass: Number,
//     hair_color: String,
//     skin_color: String,
//     eye_color: String,
//     gender: String,

// })

const specieSchema = new mongoose.Schema({
  name: String,
  classification: String,
  designation: String,
  average_height: Number,
  skin_colors: String,
  hair_colors: String,
  eye_colors: String,
  average_lifespan: Number,
  language: String,
});

const Specie = mongoose.model("Specie", specieSchema);

export default Specie;

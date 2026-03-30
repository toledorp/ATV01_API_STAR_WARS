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

const filmSchema = new mongoose.Schema({
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    release_date: String, 
});

const Film = mongoose.model('Film', filmSchema)

export default Film;
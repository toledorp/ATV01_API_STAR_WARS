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

const vehicleSchema = new mongoose.Schema({
    name: String,
    model: String,
    manufacturer: String,
    cost_in_credits: Number,
    length: Number, 
    max_atmosphering_speed: Number,
    crew: Number,
    passengers: Number,
    cargo_capacity: Number,
    consumables: String,
    vehicle_class: String
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

export default Vehicle;
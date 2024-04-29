import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
    "img_id": { type: String },
    "img_url": { type: String }
})

const servicesSchema = new mongoose.Schema({
    "heading": String,
    "slug": { type: String, reqire: true, unique: true },
    "content": { type: String, reqire: true },
    "heading2": { type: String, reqire: true, unique: true },
    "accordian": [{accHeading: String, accContent: String}],
    "featureImg": { type: String, trim: true },
    "imagedata": { type: imgSchema, require: true },
})

export const SerivcesModel = mongoose.models.services || mongoose.model("services", servicesSchema);
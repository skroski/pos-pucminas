import { Schema } from "mongoose";
import { UserSchema } from "./user.schema";

export const ServiceSchema = new Schema({
    name : String,
    users: [UserSchema],
    excerpt: String,
    description: String,
    price: Number,
    type: String
});
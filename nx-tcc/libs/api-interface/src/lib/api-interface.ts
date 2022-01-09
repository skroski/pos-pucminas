export interface ApiResponse {
  message: string;
}
export const API_URL = 'http://localhost:3000/';

import { Document } from "mongoose";

import * as mongoose from 'mongoose';

export interface Service extends Document {
     _id : mongoose.Schema.Types.ObjectId;
     name: string,
     users: object,
     excerpt: string,
     description: string,
     price: number,
     type: string
}
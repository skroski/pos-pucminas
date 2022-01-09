export const API_URL = 'http://localhost:3000/';

import * as mongoose from 'mongoose';
export interface Services {
  _id : mongoose.Schema.Types.ObjectId;
  name: string,
  users: object,
  excerpt: string,
  description: string,
  price: number,
  type: string
  
}
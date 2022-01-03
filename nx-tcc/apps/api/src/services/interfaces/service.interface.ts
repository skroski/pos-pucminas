import { Document } from "mongoose";

import * as mongoose from 'mongoose';

export interface Service extends Document {
    readonly _id : mongoose.Schema.Types.ObjectId;
    readonly name: string,
    readonly users: object,
    readonly excerpt: string,
    readonly description: string,
    readonly price: number,
    readonly type: string
}
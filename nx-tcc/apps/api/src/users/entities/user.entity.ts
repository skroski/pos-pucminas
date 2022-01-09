import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document
@Schema()
export class User {
    @Prop()
    user: string;
    @Prop()
    password: string;
    @Prop()
    email: string;

}

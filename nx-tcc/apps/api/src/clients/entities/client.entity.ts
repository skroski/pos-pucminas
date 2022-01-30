import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ClientDocument = Client & Document
@Schema()
export class Client {
    @Prop()
    user: string;
    @Prop()
    name: string;
    @Prop()
    email: string;
    @Prop()
    mobile: string;
    @Prop()
    cpf: string;
    @Prop()
    cnpj: string;
    @Prop()
    razaosocial: string;
    @Prop()
    cep: string;
    @Prop()
    address: string;
    @Prop()
    budgets: string;
    @Prop()
    typecustomer: string;

}
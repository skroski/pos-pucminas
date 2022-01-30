import { Schema } from "mongoose";

export const ClientSchema = new Schema({
    user : String,
    name: String,
    email: String,
    mobile: String,
    cpf: String,
    cnpj: String,
    razaosocial: String,
    cep: String,
    address: String,
    budget: String,
    typecustomer: String,
});
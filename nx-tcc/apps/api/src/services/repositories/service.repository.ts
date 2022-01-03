import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ServiceDTO } from "../dto/create-service.dto";
import { Service } from "../interfaces/service.interface";


@Injectable()
export class ServiceRepository {

    constructor(
        @InjectModel('services') private readonly serviceModel: Model<Service>
    ) { }
    async saveService(newService: ServiceDTO): Promise<Service> {
        const createdService = new this.serviceModel(newService);
        return await createdService.save()
    }
    async getAllServices(): Promise<Service[]> {
        return await this.serviceModel.find({}, { __v: false }).sort({ name: +1 }).exec();
    }
    async getServiceByID(serviceID: string): Promise<Service> {
        return this.serviceModel.findById({ _id: serviceID })
    }
    async deleteServiceByID(serviceID: string): Promise<Service> {
        return this.serviceModel.findOneAndDelete({ _id: serviceID })
    }
    async updateServiceByID(serviceID: string, newService: ServiceDTO): Promise<Service> {
        return await this.serviceModel.replaceOne({ _id: serviceID }, newService)
    }
    async getServicesByUserName(userName: string[]): Promise<Service[]> {
        return await this.serviceModel.find({
            $or: [
                { "users.name": { $in: userName } },
                { "users.surname": { $in: userName } }
            ]
        })

    }
}
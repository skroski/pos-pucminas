import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Service } from "../Interfaces/service.interface";
import { ServiceDTO } from "src/DTO/services.dto";

@Injectable()
export class ServiceRepository {

    constructor(
        @InjectModel('services') private readonly serviceModel : Model<Service>
        ){}
    async saveService(newService : ServiceDTO): Promise<Service>{
        const createdService = new this.serviceModel(newService);
        return createdService.save()
        
    }
}
import { Injectable } from '@nestjs/common';
import { ServiceDTO } from 'src/DTO/services.dto';
import { Service } from 'src/Mongo/Interfaces/service.interface';
import { ServiceRepository } from 'src/Mongo/Repository/service.repository';

@Injectable()
export class ServicesService {

    constructor(private readonly serviceRepository: ServiceRepository
    ) {}
    async saveService(newService: ServiceDTO): Promise<Service>{
        return await this.serviceRepository.saveService(newService)
    }
}

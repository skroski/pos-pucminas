import { BadRequestException, Injectable } from '@nestjs/common';
import { ServiceDTO } from 'src/DTO/services.dto';
import { Service } from 'src/Mongo/Interfaces/service.interface';
import { ServiceRepository } from 'src/Mongo/Repository/service.repository';

@Injectable()
export class ServicesService {

    constructor(private readonly serviceRepository: ServiceRepository
    ) {}
    async getAllServices(): Promise<Service[]> {
        const allServices = await this.serviceRepository.getAllServices();
        
        if(!allServices.length)
            throw new BadRequestException('Não temos serviços registrados');
        else
            return allServices;
    }
    async saveService(newService: ServiceDTO): Promise<Service>{
        return await this.serviceRepository.saveService(newService)
    }

    async getServiceByID(serviceID: string): Promise<Service>{
        try {
            const existService = await this.serviceRepository.getServiceByID(serviceID);
            if (!existService)
                throw new BadRequestException(`Este serviço que tentou buscar não existe`);
            return existService;
            
        } catch (e) {
            throw new BadRequestException(`Este serviço que tentou buscar não existe`);
            
        }
    }

    async deleteServiceByID(serviceID: string): Promise<Service>{
        try {
            const existService = await this.serviceRepository.deleteServiceByID(serviceID);
            if (!existService)
                throw new BadRequestException(`Este serviço que tentou excluir não existe`);
            return existService;
            
        } catch (e) {
            throw new BadRequestException(`Este serviço que tentou excluir não existe`);
            
        }
    }
    async getServicesByUserName(userName: string): Promise<Service[]>{
        const splitedUserName = userName.split(' ')

        const foundServices = await this.serviceRepository.getServicesByUserName(splitedUserName);
        if(!foundServices.length)
            return foundServices;
        else
            throw new BadRequestException("Não encontramos serviços para este usuário");
        

    }

    async updateServiceByID(serviceID: string, newService: ServiceDTO): Promise<Service>{
      
            const existService = await this.serviceRepository.getServiceByID(serviceID);
            if (!existService)
                throw new BadRequestException(`Este serviço que tentou alterar não existe`);
            const updatedService = await this.serviceRepository.updateServiceByID(serviceID, newService)
            if (updatedService) 
                return this.serviceRepository.getServiceByID(serviceID);
                else
                throw new BadRequestException("Tivemos um problema com a atualização do serviço")
    
    }
}

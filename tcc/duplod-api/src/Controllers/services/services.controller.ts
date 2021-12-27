import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ServiceDTO } from '../../DTO/services.dto';
import { ServicesService } from 'src/Services/services/services.service';
import { Service } from 'src/Mongo/Interfaces/service.interface';

@Controller('services')
export class ServicesController {
    constructor(
        private readonly serviceService : ServicesService 
    ){}
    @Get()
    getAllServices(): string{
        return 'Todos os serviços aqui!'
    }
    @Post()
    async saveService(@Body() newService : ServiceDTO): Promise<Service>{
        return await this.serviceService.saveService(newService)
    }
    @Patch()
    updateService(): string {
        return 'Este serviço foi alterado'
    }
    @Delete()
    deleteService(): string{
        return 'Este Serviço foi excluido'
    }
}

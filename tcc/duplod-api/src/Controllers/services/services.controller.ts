import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ServiceDTO } from '../../DTO/services.dto';
import { ServicesService } from 'src/Services/services/services.service';
import { Service } from 'src/Mongo/Interfaces/service.interface';

@Controller('services')
export class ServicesController {
    constructor(
        private readonly serviceService : ServicesService 
    ){}
    @Get()
    async getAllServices(): Promise<Service[]>{
        return await this.serviceService.getAllServices();
    }

    @Get(':serviceID')
    async getServiceById(@Param('serviceID') serviceID: string) {
        return await this.serviceService.getServiceByID(serviceID);
    }
    @Get('users/:userName')
    async getServicesByUserName(@Param('userName') userName: string) {
        return await this.serviceService.getServicesByUserName(userName);
    }

    @Post()
    async saveService(@Body() newService : ServiceDTO){
        return await this.serviceService.saveService(newService)
    }
    @Patch(':serviceID')
    async updateServiceByID(@Param('serviceID') serviceID : string, @Body() newService : ServiceDTO): Promise<Service> {
        return await this.serviceService.updateServiceByID(serviceID, newService);
    }
    @Delete(':serviceID')
    async deleteServiceByID(@Param('serviceID') serviceID : string): Promise<Service>{
        return await this.serviceService.deleteServiceByID(serviceID);
    }
}

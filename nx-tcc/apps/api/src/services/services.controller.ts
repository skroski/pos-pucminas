import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceDTO } from './dto/create-service.dto';
import { Service } from './interfaces/service.interface';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: ServiceDTO) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  async findAll(): Promise<Service[]> {
    return await this.servicesService.findAll();
  }

  @Get(':serviceID')
  async findOne(@Param('serviceID') serviceID: string) {
    return await this.servicesService.findOne(serviceID);
  }
  @Get('users/:userName')
    async getServicesByUserName(@Param('userName') userName: string) {
        return await this.servicesService.getServicesByUserName(userName);
    }


  @Patch(':serviceID')
  async update(@Param('serviceID') serviceID : string, @Body() newService : ServiceDTO): Promise<Service> {
    return await this.servicesService.update(serviceID, newService);
}

  @Delete(':serviceID')
  remove(@Param('serviceID') serviceID: string) {
    return this.servicesService.remove(serviceID);
  }
}

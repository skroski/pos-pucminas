import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { MongooseModule} from '@nestjs/mongoose'
import { ServiceSchema } from '../services/entities/service.schema'
import { ServiceRepository } from './repositories/service.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name : 'services', schema : ServiceSchema}])],
  controllers: [ServicesController],
  providers: [ServicesService, ServiceRepository]
})
export class ServicesModule {}

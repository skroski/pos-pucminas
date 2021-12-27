import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ServicesController } from './Controllers/services/services.controller';
import { ServicesService } from './Services/services/services.service';
import { ServiceSchema } from './Mongo/Schemas/service.schema';
import { ServiceRepository } from './Mongo/Repository/service.repository';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb+srv://daniel:dan@098765@cluster0.7ojjg.mongodb.net/duplod/?retryWrites=true&w=majority', { useNewUrlParser : true, useUnifiedTopology: true })
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/servicos', { useNewUrlParser : true, useUnifiedTopology: true }),
    MongooseModule.forFeature([
      { name : 'services', schema : ServiceSchema}
    ])
  ],
  controllers: [ServicesController],
  providers: [ServicesService, ServiceRepository],
})
export class AppModule {}

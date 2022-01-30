

import { Module } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Client } from './entities/client.entity';
import { ClientSchema } from './entities/client.schema';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([ { name: Client.name, schema:ClientSchema}]),
    AuthorizationModule, ConfigModule.forRoot()
  ],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}


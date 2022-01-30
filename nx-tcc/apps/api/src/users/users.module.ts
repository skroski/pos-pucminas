import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { UserSchema } from '../services/entities/user.schema';
import { AuthorizationModule } from '../authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeature([ { name: User.name, schema:UserSchema}]),
    AuthorizationModule, ConfigModule.forRoot()
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

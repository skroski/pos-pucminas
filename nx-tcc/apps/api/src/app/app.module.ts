import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ServicesModule } from '../services/services.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [                
    //MongooseModule.forRoot('mongodb+srv://daniel:dan@098765@cluster0.7ojjg.mongodb.net/duplod', { useNewUrlParser : true, useUnifiedTopology: true }), ServicesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tcc'),
    ServicesModule, 
    UsersModule
 
  ],
})
export class AppModule {}

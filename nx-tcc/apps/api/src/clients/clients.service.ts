import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private clientModel:Model<ClientDocument>){}

  create(createClientDTO: CreateClientDTO) {
    
    return this.clientModel.create(createClientDTO);
  }

  findAll() {
    return this.clientModel.find().exec();
  }

  findOne(id: string) {
    return this.clientModel.findById(id).exec();
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    await this.clientModel.updateOne({ _id: id}, updateClientDto).exec();
    return this.clientModel.findById(id).exec();
  }

  remove(id: string) {
    this.clientModel.deleteOne({ _id: id });
  }
}
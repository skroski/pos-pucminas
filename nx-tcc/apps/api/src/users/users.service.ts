import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private userModel:Model<UserDocument>){}
  create(createUserDto: UsersDTO) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id).exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.userModel.updateOne({ _id: id}, updateUserDto).exec();
    return this.userModel.findById(id).exec();
  }

  remove(id: string) {
    this.userModel.deleteOne({ _id: id });
  }
}

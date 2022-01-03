import { PartialType } from '@nestjs/mapped-types';
import { UsersDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(UsersDTO) {}

import { PartialType } from '@nestjs/mapped-types';
import { ServiceDTO } from './create-service.dto';

export class UpdateServiceDto extends PartialType(ServiceDTO) {
    
}

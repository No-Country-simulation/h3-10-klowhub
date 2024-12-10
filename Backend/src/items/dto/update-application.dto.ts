import { PartialType } from '@nestjs/swagger';
import { CreateApplicationDto } from './create-application.dto';

export class UpdateCourseDto extends PartialType(CreateApplicationDto) {}

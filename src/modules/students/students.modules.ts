import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { Students } from '../../db/entities/students.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Students])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModules {}

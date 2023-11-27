import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Students } from '../../db/entities/students.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Students)
    private studentsRepository: Repository<Students>,
  ) {}

  getStudents(): Promise<Students[]> {
    return this.studentsRepository.find();
  }

  async addStudents(data) {
    const student = this.studentsRepository.create(data);
    return await this.studentsRepository.save(student);
  }
}

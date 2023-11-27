import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller()
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async getStudents() {
    return this.studentsService.getStudents();
  }

  @Post()
  async addStudents(@Body() body) {
    return this.studentsService.addStudents(body);
  }
}

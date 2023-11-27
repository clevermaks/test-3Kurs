import { Module } from '@nestjs/common';
import { StudentsModules } from './modules/students/students.modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: () => ({
        type: 'mysql',
        host: '84.201.184.150',
        port: 3306,
        username: 'admin_test11',
        password: 'QaRAbThSU5',
        database: 'admin_test11',
        entities: ['./dist/db/entities/*.{ts,js}'],
        synchronize: true,
      }),
    }),
    StudentsModules,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

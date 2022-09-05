import { Module } from '@nestjs/common';
import { EmployeeContrller } from '@src/controllers/employee.controller';
import { EmployeeService } from '@services/employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from '@src/models/employee.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),
  ],
  controllers: [EmployeeContrller],
  providers: [EmployeeService],
  exports: [EmployeeService],
})
export class EmployeeModule {}

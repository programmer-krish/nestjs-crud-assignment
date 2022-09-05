import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from '@src/services/employee.service';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { PostFailure } from '@src/validation/validation.exception';

const failure: PostFailure = {
  error: StatusCodes.INTERNAL_SERVER_ERROR,
  message: ReasonPhrases.INTERNAL_SERVER_ERROR,
};
@Controller('/employee')
export class EmployeeContrller {
  constructor(private readonly employeeService: EmployeeService) {}
  @Post()
  addEmployee(
    @Body('first_name') empFirstName: string,
    @Body('last_name') empLastName: string,
    @Body('email') empEmail: string,
    @Body('number') empNumber: string,
    @Body('gender') empGender: string,
    @Body('photo') empPhoto: string,
  ): any {
    const data = this.employeeService.insertEmployee(
      empFirstName,
      empLastName,
      empEmail,
      empNumber,
      empGender,
      empPhoto,
    );

    if (!data) {
      return failure;
    }

    return data;
  }

  @Get()
  getEmployee() {
    const data = this.employeeService.getEmployees();

    if (!data) {
      return failure;
    }

    return data;
  }
  @Get(':id')
  getSingleEmployee(@Param('id') empId: string) {
    return this.employeeService.getSingleEmployee(empId);
  }

  @Put(':id')
  async updateEmployee(
    @Param('id') empId: string,
    @Body('first_name') empFirstName: string,
    @Body('last_name') empLastName: string,
    @Body('email') empEmail: string,
    @Body('number') empNumber: string,
    @Body('gender') empGender: string,
    @Body('photo') empPhoto: string,
  ) {
    await this.employeeService.updateEmployee(
      empId,
      empFirstName,
      empLastName,
      empEmail,
      empNumber,
      empGender,
      empPhoto,
    );
    return null;
  }

  @Delete(':id')
  async removeEmployee(@Param('id') prodId: string) {
    await this.employeeService.deleteEmployee(prodId);
    return null;
  }
}

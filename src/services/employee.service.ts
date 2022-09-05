import { Injectable, NotFoundException } from '@nestjs/common';
import { Employees } from '@src/models/employee.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employees>,
  ) {}

  async insertEmployee(
    firstName: string,
    lastName: string,
    email: string,
    number: string,
    gender: string,
    photo: string,
  ) {
    const newEmployee = new this.employeeModel({
      first_name: firstName,
      last_name: lastName,
      email: email,
      number: number,
      gender: gender,
      photo: photo,
    });

    const result = await newEmployee.save();

    return result;
  }

  async getEmployees() {
    const result = await this.employeeModel.find().exec();
    return result.map((emp) => ({
      id: emp._id,
      first_name: emp.first_name,
      last_name: emp.last_name,
      email: emp.email,
      number: emp.number,
      gender: emp.gender,
      photo: emp.photo,
    }));
  }

  async getSingleEmployee(empId: string) {
    const emp = await this.findEmployee(empId);
    return {
      id: emp._id,
      first_name: emp.first_name,
      last_name: emp.last_name,
      email: emp.email,
      number: emp.number,
      gender: emp.gender,
      photo: emp.photo,
    };
  }

  async updateEmployee(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    number: string,
    gender: string,
    photo: string,
  ) {
    const updatedEmployee = await this.findEmployee(id);
    if (firstName) {
      updatedEmployee.first_name = firstName;
    }
    if (lastName) {
      updatedEmployee.last_name = lastName;
    }
    if (email) {
      updatedEmployee.email = email;
    }
    if (number) {
      updatedEmployee.number = number;
    }
    if (gender) {
      updatedEmployee.gender = gender;
    }
    if (photo) {
      updatedEmployee.photo = photo;
    }
    updatedEmployee.save();
  }

  async deleteEmployee(empId: string) {
    const result = await this.employeeModel.deleteOne({ _id: empId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find Employee.');
    }
  }

  private async findEmployee(empId: string): Promise<Employees> {
    let employee = await this.employeeModel.findById(empId).exec();

    if (!employee) {
      throw new NotFoundException('Could not find Employee.');
    }
    return employee;
  }
}

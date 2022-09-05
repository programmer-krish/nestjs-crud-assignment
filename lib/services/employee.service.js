"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EmployeeService = class EmployeeService {
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async insertEmployee(firstName, lastName, email, number, gender, photo) {
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
    async getSingleEmployee(empId) {
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
    async updateEmployee(id, firstName, lastName, email, number, gender, photo) {
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
    async deleteEmployee(empId) {
        const result = await this.employeeModel.deleteOne({ _id: empId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Could not find Employee.');
        }
    }
    async findEmployee(empId) {
        let employee = await this.employeeModel.findById(empId).exec();
        if (!employee) {
            throw new common_1.NotFoundException('Could not find Employee.');
        }
        return employee;
    }
};
EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Employee')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map
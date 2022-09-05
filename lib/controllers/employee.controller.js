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
exports.EmployeeContrller = void 0;
const common_1 = require("@nestjs/common");
const employee_service_1 = require("../services/employee.service");
const http_status_codes_1 = require("http-status-codes");
const failure = {
    error: http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR,
    message: http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR,
};
let EmployeeContrller = class EmployeeContrller {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    addEmployee(empFirstName, empLastName, empEmail, empNumber, empGender, empPhoto) {
        const data = this.employeeService.insertEmployee(empFirstName, empLastName, empEmail, empNumber, empGender, empPhoto);
        if (!data) {
            return failure;
        }
        return data;
    }
    getEmployee() {
        const data = this.employeeService.getEmployees();
        if (!data) {
            return failure;
        }
        return data;
    }
    getSingleEmployee(empId) {
        return this.employeeService.getSingleEmployee(empId);
    }
    async updateEmployee(empId, empFirstName, empLastName, empEmail, empNumber, empGender, empPhoto) {
        await this.employeeService.updateEmployee(empId, empFirstName, empLastName, empEmail, empNumber, empGender, empPhoto);
        return null;
    }
    async removeEmployee(prodId) {
        await this.employeeService.deleteEmployee(prodId);
        return null;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('first_name')),
    __param(1, (0, common_1.Body)('last_name')),
    __param(2, (0, common_1.Body)('email')),
    __param(3, (0, common_1.Body)('number')),
    __param(4, (0, common_1.Body)('gender')),
    __param(5, (0, common_1.Body)('photo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Object)
], EmployeeContrller.prototype, "addEmployee", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeeContrller.prototype, "getEmployee", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeeContrller.prototype, "getSingleEmployee", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('first_name')),
    __param(2, (0, common_1.Body)('last_name')),
    __param(3, (0, common_1.Body)('email')),
    __param(4, (0, common_1.Body)('number')),
    __param(5, (0, common_1.Body)('gender')),
    __param(6, (0, common_1.Body)('photo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], EmployeeContrller.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeContrller.prototype, "removeEmployee", null);
EmployeeContrller = __decorate([
    (0, common_1.Controller)('/employee'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeContrller);
exports.EmployeeContrller = EmployeeContrller;
//# sourceMappingURL=employee.controller.js.map
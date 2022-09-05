import * as mongoose from 'mongoose';

export const EmployeeSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, unique: true },
    last_name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    gender: { type: String, required: true },
    photo: { type: String, required: true, unique: true },
  },
  { timestamps: true, strict: false },
);

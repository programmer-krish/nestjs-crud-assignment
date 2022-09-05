import * as mongoose from 'mongoose';

export interface Employees extends mongoose.Document {
  first_name: string;
  last_name: string;
  email: string;
  number: string;
  gender: string;
  photo: string;
}

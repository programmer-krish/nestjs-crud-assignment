import { Module } from '@nestjs/common';
import { EmployeeModule } from '@src/module/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    EmployeeModule,
    MorganModule,
    //Configure the enviornment file .env
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),

    //Connecting to mongodb
    MongooseModule.forRoot(`${process.env.MONGO_URL}`),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('combined'),
    },
  ],
})
export class AppModule {}

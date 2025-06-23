import { AppController } from './app.controller';
import { AuthModule } from 'auth/auth.module';
import { ConfigModule } from '../_core/config/config.module';
import { HealthModule } from '../health/health.module';
import { LoggerModule } from '../_core/logger/logger.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '../_core/typeOrm/typeorm.module';

@Module({
  imports: [
    // CONFIG, LOGGER, DB
    ConfigModule,
    LoggerModule,
    TypeOrmModule,

    // MODULE
    HealthModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

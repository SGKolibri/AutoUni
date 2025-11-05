import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RealtimeModule } from './modules/realtime/realtime.module';
import { PrismaService } from 'prisma/prisma.service';
import { DevicesModule } from './modules/devices/devices.module';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { EnergyModule } from './modules/energy/energy.module';
import { AutomationsModule } from './modules/automations/automations.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
    EventEmitterModule.forRoot(),
    RealtimeModule,
    UserModule,
    AuthModule,
    DevicesModule,
    MqttModule,
    EnergyModule,
    AutomationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

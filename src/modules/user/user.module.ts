import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from 'src/modules/auth/auth.module';
import { AbilityModule } from 'src/modules/ability/ability.module';
import { RolesModule } from 'src/modules/role/role.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule, AbilityModule, RolesModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}

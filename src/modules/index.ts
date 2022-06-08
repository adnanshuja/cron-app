// modules
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AbilityModule } from './ability/ability.module';
import { PermissionsModule } from './permission/permission.module';
import { RolesModule } from './role/role.module';
import { CronModule } from './cron/cron.module';

const modules = [
    UserModule, AuthModule, AbilityModule, PermissionsModule, RolesModule, CronModule 
];

// entities
import { User } from './user/user.entity';
import { Role } from './role/role.entity';
import { Permission } from './permission/permission.entity';
import { Cron } from './cron/entities/cron.entity';

const entities = [
    User, Role, Permission, Cron
];
export {
    modules, entities
}
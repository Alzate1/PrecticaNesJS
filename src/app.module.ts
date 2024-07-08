import { Module } from '@nestjs/common';
  import { TaksModule } from './tasks/taks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloController } from './hello/hello.controller';
import { PaymetsModule } from './paymets/paymets.module';
@Module({
  imports: [TaksModule, ProjectsModule, AuthModule, UsersModule, PaymetsModule],
  controllers: [HelloController],

})
export class AppModule {}

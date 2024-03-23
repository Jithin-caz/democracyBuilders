import { Module } from '@nestjs/common';
import { VotersController } from './voters.controller';
import { VotersService } from './voters.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [VotersController],
  providers: [VotersService]
})
export class VotersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VotersModule } from './voters/voters.module';
import { PrismaModule } from './prisma/prisma.module';
import { CandidateModule } from './candidate/candidate.module';


@Module({
  imports: [VotersModule, PrismaModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

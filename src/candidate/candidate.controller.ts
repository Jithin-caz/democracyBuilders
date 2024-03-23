import { Body, Controller, Get, Put } from '@nestjs/common';
import { Public } from '@prisma/client/runtime/library';

import { VotersService } from 'src/voters/voters.service';
import { CandidateService } from './candidate.service';
import { CandidateDTO,CandidateVoteDTO } from './dto';

@Controller('candidate')
export class CandidateController {
    constructor(private readonly candidateservice:CandidateService){}
    @Get('listAll')
    showCandidates(@Body() dto:CandidateDTO)
    {
        return this.candidateservice.showCandidates(dto);
    }
    @Put('increment')
    incrCandidate(@Body() dto:CandidateVoteDTO)
    {
        return this.candidateservice.incremnetVote(dto)
    }
}

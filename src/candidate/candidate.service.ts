import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CandidateDTO, CandidateVoteDTO } from './dto';

@Injectable()
export class CandidateService {
    constructor(private readonly prismaservice:PrismaService){}
    async showCandidates(dto:CandidateDTO)
    {
        const constituency=dto.constituency
        try{
            const candidates=await this.prismaservice.candidate.findMany({
                where:{
                    constituency
                }
            })
            if(candidates.length===0)
            throw new HttpException("no candidate in this constituency",HttpStatus.AMBIGUOUS)

            return candidates;
        }
       catch(err)
       {
        throw new HttpException("no candidate in this constituency",HttpStatus.AMBIGUOUS)
       }

    }
    async incremnetVote(dto:CandidateVoteDTO){
        const id=dto.id
        try{
            const candi=await this.prismaservice.candidate.update({
                where: {
                    id
                  },
                  data: {
                   votes:{increment:1}
                  }
            })
            return candi
        }
        catch(err)
        {
            throw new HttpException("candidate not found",HttpStatus.AMBIGUOUS)
        }
    }
}

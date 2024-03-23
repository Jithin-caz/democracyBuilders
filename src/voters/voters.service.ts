import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { VoterDto, VoterValidateDto } from './dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class VotersService {
    
    constructor(private readonly prismaservice:PrismaService){}
    async createVoter(dto:VoterDto)
    {
        const saltOrRounds = 10;
        const VoterIdHash = await bcrypt.hash(dto.Voterid.toString(), saltOrRounds);
        try{
            const voter=await this.prismaservice.voter.create({
                data:{
                    Voterid:VoterIdHash,  
                    name:dto.name,
                    age:dto.age,
                    constituency:dto.constituency,
                    area:dto.area
                }
            })
           
            return voter;
        }
        catch(err){
            throw new HttpException('error I dont know',HttpStatus.AMBIGUOUS);
        }

    }
    async validateVoter(dto:VoterValidateDto)
    {
        const name=dto.name
        const voters=await this.prismaservice.voter.findMany(
            {
                where:
                {
                    name
                }
            }
        )
       
            for(var i=0;i<voters.length;i++)
            {
                const isMatch = await bcrypt.compare(dto.Voterid.toString(),voters[i].Voterid);
                if(isMatch)
                    break;
            }
            if(i===voters.length)
                throw new HttpException("voter id not found",HttpStatus.BAD_REQUEST);
            
            else
            {
                delete voters[i].Voterid
                return voters[i]
            }
               
        
    }
    async markAsVoted(dto:VoterValidateDto)
    {
        const name=dto.name
      
        const voters=await this.prismaservice.voter.findMany(
            {
                where:
                {
                    name
                }
            }
        )
       
            for(var i=0;i<voters.length;i++)
            {
                const isMatch = await bcrypt.compare(dto.Voterid.toString(),voters[i].Voterid);
                if(isMatch)
                    break;
            }
            if(i<voters.length){
                delete voters[i].Voterid
                return voters[i]     
            }
            else
            throw new HttpException("voter not found",HttpStatus.AMBIGUOUS)
    }
    
    async showVoterDetails(dto:VoterValidateDto)
    {
        const name=dto.name
      
        const voters=await this.prismaservice.voter.findMany(
            {
                where:
                {
                    name
                }
            }
        )
       
            for(var i=0;i<voters.length;i++)
            {
                const isMatch = await bcrypt.compare(dto.Voterid.toString(),voters[i].Voterid);
                if(isMatch)
                    break;
            }  
            const Voterid=voters[i].Voterid;
            const voter=await this.prismaservice.voter.update({
                where: {
                    Voterid
                  },
                  data: {
                    hasVoted:true
                  }
            })
            return voter;
    }

    
}

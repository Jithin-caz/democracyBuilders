import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { VoterDto, VoterValidateDto } from './dto';
import { VotersService } from './voters.service';

@Controller('voters')
export class VotersController {
    constructor(private readonly voterservice:VotersService){}
    @Post('create')
    createVoter(@Body() dto:VoterDto)
    {
            return this.voterservice.createVoter(dto);
    }
    @Post('validate')
    validateVoter(@Body() dto:VoterValidateDto)
    {
        return this.voterservice.validateVoter(dto);
    }
    @Put('vote')
    markasvoted(@Body() dto:VoterValidateDto)
    {
        return this.voterservice.markAsVoted(dto);
    }
    @Put('showVoter')
    showVoterDetails(@Body() dto:VoterValidateDto)
    {
        return this.voterservice.showVoterDetails(dto);
    }
}

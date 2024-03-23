import { IsNotEmpty } from "class-validator";

export class CandidateDTO
{
    @IsNotEmpty()
    constituency:string
}

export class CandidateVoteDTO
{
    @IsNotEmpty()
    id:number
}
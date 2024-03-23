import { IsNotEmpty } from "class-validator"

export class VoterDto
{
@IsNotEmpty()   
Voterid:number;

@IsNotEmpty()   
name:string;

age:number;

constituency:string;

area:string;
}

export class VoterValidateDto{
@IsNotEmpty()   
Voterid:number;

@IsNotEmpty()   
name:string;
}


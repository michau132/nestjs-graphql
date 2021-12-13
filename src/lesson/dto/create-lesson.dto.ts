import { IsDateString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateLesson {
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}

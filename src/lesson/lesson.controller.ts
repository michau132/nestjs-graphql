import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { LessonService } from './lesson.service';

@Controller('lessons')
export class LessonController {
  constructor(private lessonService: LessonService) {}

  @Get('')
  getTask(): Promise<Lesson[]> {
    return this.lessonService.getAllLessons();
  }

  @Post()
  createLesson(@Body() createLesson: CreateLessonInput) {
    return this.lessonService.createLesson(createLesson);
  }
}

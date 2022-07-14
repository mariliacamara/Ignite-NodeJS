import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Dani',
    duration: 60,
  });

  CreateCourseService.execute({
    name: 'NodeJS',
    educator: 'Marilia',
  });
  
  return response.send();
}
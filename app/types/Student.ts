import { ISchoolClass } from './SchoolClass';

export class Student {
  id: number;
  reading: number;
  math: number;
  science: number;
  socialStudies: number;
  gifted: boolean = false;
  esol: boolean;
  iep: boolean;
  hasReading: boolean;
  hasMath: boolean;
  hasScience: boolean;
  hasSocialStudies: boolean;
  schoolClasses: Array<ISchoolClass>;
}
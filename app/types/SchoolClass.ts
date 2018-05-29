import {Student} from './Student';

interface SchoolClassConstructor {
  new(name : string, size : number, ranking: number) : ISchoolClass
}

interface StudentSorter {
  (a : Student, b : Student) : number;
}

interface HasClass {
  (student : Student) : boolean;
}

export interface ISchoolClass {
  size : number;
  ranking: number;
  students : Array < Student >;
  sorter : StudentSorter;
  hasClass : HasClass;
  fill(students : Array < Student >, schoolClass : ISchoolClass) : any;
}

abstract class SchoolClassImpl implements ISchoolClass {
  constructor(name : string, size : number, ranking : number) {}
  students = [];
  size : number;
  ranking: number;
  abstract sorter : StudentSorter;
  abstract hasClass : HasClass;

  fill(students : Array < Student >, schoolClass : ISchoolClass) {
    students.sort(this.sorter);
    while (schoolClass.students.length < schoolClass.size) {
      students.map(student => {
        if (!this.hasClass) {
          schoolClass
            .students
            .push(student)
        }
      });
    }
  }
}

export function createClass(ctor : SchoolClassConstructor, name : string, size : number, ranking: number) : ISchoolClass {
  return new ctor(name, size, ranking);
}

export class ReadingClass extends SchoolClassImpl {

  sorter = function (a : Student, b : Student) : number {
    return a.reading - b.reading;
  }

  hasClass = function (student : Student) : boolean {return student.hasReading;}
}

export class MathClass extends SchoolClassImpl {

  sorter = function (a : Student, b : Student) : number {
    return a.math - b.math;
  }

  hasClass = function (student : Student) : boolean {return student.hasMath;}
}

export class ScienceClass extends SchoolClassImpl {

  sorter = function (a : Student, b : Student) : number {
    return a.science - b.science;
  }

  hasClass = function (student : Student) : boolean {return student.hasScience;}
}

export class SocialStudiesClass extends SchoolClassImpl {

  sorter = function (a : Student, b : Student) : number {
    return a.socialStudies - b.socialStudies;
  }

  hasClass = function (student : Student) : boolean {return student.hasSocialStudies;}
}

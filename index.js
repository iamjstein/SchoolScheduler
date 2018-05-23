import { kids } from './app/data/kids';
import { classes } from './app/data/classes';

kids.map(kid => console.log(kid));

const readingClasses = classes.filter(e => e.name === 'reading');

console.log(readingClasses);
console.log(typeof readingClasses);
console.log(typeof readingClasses.students);

readingClasses.students = [];
console.log(typeof readingClasses.students);
console.log(readingClasses.students.length);

kids.map(kid => readingClasses.students.push(kid.name));

console.log(readingClasses.students);

classes.map(e => console.log(e));

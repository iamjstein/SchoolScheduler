import { kids } from './app/data/kids';
import { createClass, ISchoolClass, ReadingClass, MathClass, ScienceClass, SocialStudiesClass} from './app/types/SchoolClass';

let classes: Array<ISchoolClass> = [];
classes.push(createClass(ReadingClass, '51', 26, 51));
classes.push(createClass(ReadingClass, '52', 26, 52));
classes.push(createClass(ReadingClass, '53', 26, 53));
classes.push(createClass(ReadingClass, '54', 26, 54));

classes.push(createClass(MathClass, '51', 26, 51));
classes.push(createClass(MathClass, '52', 26, 52));
classes.push(createClass(MathClass, '53', 26, 53));
classes.push(createClass(MathClass, '54', 26, 54));

classes.push(createClass(ScienceClass, '51', 26, 51));
classes.push(createClass(ScienceClass, '52', 26, 52));
classes.push(createClass(ScienceClass, '53', 26, 53));
classes.push(createClass(ScienceClass, '54', 26, 54));

classes.push(createClass(SocialStudiesClass, '51', 26, 51));
classes.push(createClass(SocialStudiesClass, '52', 26, 52));
classes.push(createClass(SocialStudiesClass, '53', 26, 53));
classes.push(createClass(SocialStudiesClass, '54', 26, 54));

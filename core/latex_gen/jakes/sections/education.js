import { escapeLatex } from '../../latexUtils'
import {EducationItem,Education} from '../models/education'

function generateEducation (name,educationList){
    const EducationChunks{}
}

function generateEducationItem(schoolName,location,gpa,description,
    dateStart,dateEnd){
    schoolName = escapeLatex(schoolName);
    location = escapeLatex(location);
    const checkedGPA = gpa => gpa!=null?escapeLatex(gpa):gpa;
    description = escapeLatex(description);

    if(checkedGPA!=null){
        return  `\\resumeSubheadingWithGPA\n
    ${schoolName}${location}\n${description}\n
    ${dateStart} -- ${dateEnd}\n${checkedGPA}}` 
    }
    else {
        return `\\resumeSubheading\n
        ${schoolName}${location}\n${description}\n
        ${dateStart} -- ${dateEnd}`

    }


}

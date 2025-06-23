import { escapeLatex } from '../../latexUtils.js';
import { EducationItem } from '../models/education.js';

/**
 * Generate the full LaTeX block for the Education section
 * @param {string} name - Section name, usually "Education"
 * @param {EducationItem[]} educationList - List of entries
 */
export function generateEducation(name, educationList) {
    const lines = [];
    lines.push(`\\section{${escapeLatex(name)}}`);
    lines.push(`\\resumeSubHeadingListStart`);

    for (let i = 0; i < educationList.length; i++) {
        lines.push(generateEducationItem(educationList[i]));
    }

    lines.push(`\\resumeSubHeadingListEnd`);
    return lines.join('\n');
}

/**
 * Generate LaTeX for a single Education entry
 * @param {EducationItem} item
 */
function generateEducationItem(item) {
    const school = escapeLatex(item.getSchoolName());
    const location = escapeLatex(item.getLocation());
    const description = escapeLatex(item.getDescription());
    const start = formatDate(item.getStartDate());
    const end = formatDate(item.getEndDate());
    const gpa = item.getGPA() != null ? escapeLatex(item.getGPA()) : null;

    return gpa
        ? renderWithGPA(school, location, description, start, end, gpa)
        : renderWithoutGPA(school, location, description, start, end);
}

/**
 * Render a line with GPA
 */
function renderWithGPA(school, location, description, start, end, gpa) {
    return [
        `\\resumeSubheadingWithGPA`,
        `  {${school}}{${start} -- ${end}}`,
        `  {${location}}{${gpa}}`,
        `  {${description}}`
    ].join('\n');
}

/**
 * Render a line without GPA
 */
function renderWithoutGPA(school, location, description, start, end) {
    return [
        `\\resumeSubheading`,
        `  {${school}}{${start} -- ${end}}`,
        `  {${location}}{}`,
        `  {${description}}`
    ].join('\n');
}

/**
 * Format a JS Date object as "Month YYYY"
 */
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

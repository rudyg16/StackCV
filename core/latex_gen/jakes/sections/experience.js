import { escapeLatex } from '../../latexUtils.js';
import { LinkType } from '../../core/header.js'; // if you use it later
import { Experience, ExperienceItem } from '../models/experience.js';

/**
 * Generate full LaTeX block for the Experience section
 * @param {string} name - The LaTeX section name (e.g., "Experience")
 * @param {ExperienceItem[]} experienceList - Array of experience items
 */
export function generateExperience(name, experienceList) {
    const lines = [];
    lines.push(`\\section{${escapeLatex(name)}}`);
    lines.push(`\\resumeSubHeadingListStart`);

    for (let i = 0; i < experienceList.length; i++) {
        const item = experienceList[i];
        lines.push(generateExperienceItem(item));
    }

    lines.push(`\\resumeSubHeadingListEnd`);
    return lines.join('\n');
}

/**
 * Generate LaTeX for a single experience item
 * @param {ExperienceItem} item
 */
function generateExperienceItem(item) {
    const role = escapeLatex(item.getRole());
    const location = escapeLatex(item.getLocation());
    const bullets = item.getBullets().map(b => `\\resumeItem{${escapeLatex(b)}}`).join('\n');
    const startDate = formatDate(item.getStartDate());
    const endDate = formatDate(item.getEndDate());

    return [
        `\\resumeSubheading`,
        `  {${role}}{${startDate} -- ${endDate}}`,
        `  {${location}}{}`,
        `  \\resumeItemListStart`,
        bullets,
        `  \\resumeItemListEnd`
    ].join('\n');
}

/**
 * Format date as "Month YYYY"
 * @param {Date} date
 */
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

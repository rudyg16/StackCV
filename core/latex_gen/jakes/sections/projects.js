import { escapeLatex } from "../../latexUtils";
import {ProjectItems,Projects} from '../models/projects'

/** 
* @param {ProjectItems[] } projectList
*/
export function generateProjects(name,projectList){
    const lines = [];
    lines.push(`\\section{${name}}`);
    lines.push(`\\resumeSubHeadingListStart`);
    for (let i = 0; i < projectList.length; i++) {
        const item = projectList[i];
        lines.push(generateProjectItem(item));
    }
    lines.push(`\\resumeSubHeadingListEnd`);
    return lines.join('\n');
} 
/** 
* @param {ProjectItem} item 
*/
 export function generateProjectItem(item){
    const name = escapeLatex(item.getName);
    const skillsUsed = item.getSkillsUsed().map(escapeLatex);
    const bullets = item.getBullets().bullets.map(escapeLatex);
    const startDate = formatDate(item.getStartDate());
    const endDate = formatDate(item.getEndDate());
    
    const latexBullets =bullets.map(b=> `\\resumeItem{${b}}`);

    return [
        `\\resumeSubheading`,
        `{${name}}{${location}}`,
        `\\resumeItemListStart`,
        ...latexBullets,
        `\\resumeItemListEnd`

        
    ].join('\n');
}
/**
 * Format date as "Month YYYY"
 * @param {Date} date
 */
function formatDate(date) {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}

import { escapeLatex } from '../../latexUtils.js';
import { Skills, SkillItem } from '../models/skills.js';

/**
 * Generate LaTeX block for the Skills section
 * @param {string} sectionName - Usually "Technical Skills"
 * @param {SkillItem[]} skillItems - Array of categorized skill groups
 * @returns {string}
 */
export function generateSkills(sectionName, skillItems) {
    const lines = [];

    lines.push(`\\section{${escapeLatex(sectionName)}}`);
    lines.push(`\\begin{itemize}[leftmargin=0.15in, label={}]`);
    lines.push(`  \\small{\\item{`);

    for (let i = 0; i < skillItems.length; i++) {
        lines.push(generateSkillItem(skillItems[i]) + ` \\\\`);
    }

    lines.push(`  }}`);
    lines.push(`\\end{itemize}`);

    return lines.join('\n');
}

/**
 * Render a single skill category line: \\textbf{Header}{: skill1, skill2, skill3}
 * @param {SkillItem} item
 * @returns {string}
 */
function generateSkillItem(item) {
    const header = escapeLatex(item.getHeader());
    const skills = item.getSkills().map(escapeLatex).join(', ');
    return `\\textbf{${header}}{: ${skills}}`;
}

import { HeaderItem,LinkType,Header } from '../models/header'
import { escapeLatex } from '../../latexUtils'

function generateHeader(name,headerList){
    const headerChunks = [];
    headerChunks.push(`\\begin{center}\n
    \\textbf{\\Huge \\scshape ${name}} \\ \\vspace{1pt}`);

    const itemStrings = [];
    for(let i = 0;i<headerList.length;i++){
        item = headerList[i];
        const chunk = createHeaderItem(
            item.getContent(),
            item.getType(),
            item.getUrlLink()
    );
    itemStrings.push(chunk);

    }
    headerChunks.push(itemStrings.join('$\\vert$')); // \vert = |, but is a safer macro for tex environments
    headerChunks.push('\\end{center}');
    return headerChunks.join('\n');
}

function createHeaderItem(content,type,link){
    content = escapeLatex(content);
    link = escapeLatex(content);
    
    switch(type.getType()){
        case LinkType.Email:
            return `\\href{mailto:${link}}
            {\\underline{${content}}}`;
        case LinkType.Normal:
            return `\\small ${content}`;
        case LinkType.Website:
            return `\\href{${link}}
            {\\underline{${content}}}`;
        }

}
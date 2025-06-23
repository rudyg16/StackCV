export const escapeLatex = (input) =>{
    //Latex special characters that need to be escaped with a \
    // : # $ % & ~ _ ^ \ { }
    return input.replace(/[#\$%&~_\^\\\{\}]/g,'\\$1');
    //regex uses \ so you need to escape it with another \
    //hence, \\, 1 means that the found characters are grouped as 1 and 
    //replacement will be global
}
/* see https://github.com/djfdyuruiry/pretty-markdown-pdf */
/* for "win" machine, path must be appended with double back quotes */

/*wARNING: vulnerability detected, use only for test purpose https://github.com/leff/markdown-it-named-headers/issues/9 */
const prettyMdPdf = require("pretty-markdown-pdf")

const convertToPdf = async function(inputPath, outputPath){
    try {
        await prettyMdPdf.convertMd({ markdownFilePath: inputPath, outputFilePath: outputPath});
    }catch(error){
        throw new Error(error.message);
    }
}


module.exports = convertToPdf;
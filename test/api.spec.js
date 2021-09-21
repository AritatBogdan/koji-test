const  { resolve } = require('path');
const { describe, it } = require('mocha');
const chai = require('chai');
const chaiFiles = require('chai-files');
chai.use(chaiFiles);
const convertMdToPDF = require('../services/mdToPdf');

describe('compile to PDF', async function(){
    it('folder output should not be empty', async function(){
        const file = await convertMdToPDF(resolve(__dirname, '../templates', 'markdowns', 'README-test.md'),resolve(__dirname, '../templates', 'pdf', 'README-test.pdf'));
        chai.expect(chaiFiles.dir('templates/pdf')).to.not.be.empty;
    })
})
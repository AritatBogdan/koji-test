const router = require('express').Router();
const mdToPdf = require('./../../services/mdToPdf');

router.post('/toPdf', async (req, res) => {
    try{
        const input = "C:\\Users\\Aritat\\Desktop\\Koji-test\\templates\\markdowns\\README-test.md";
        const output = "C:\\Users\\Aritat\\Desktop\\Koji-test\\templates\\pdf\\README-test.pdf";
        await mdToPdf(input,output);
        res.status(200).send('Success');
    } catch(error){
        res.status(500).send(error.message);
    }
});

module.exports = router;
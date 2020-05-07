import express from 'express';
let router = express.Router();

router.get('/api/v1/test', (req, res, next) => {
    let languages = [
        {
            language: 'Spanish'
        },
        {
            language: "English"
        },
        {
            language: "French"
        },
        {
            langauge: "German"
        }
    ];
    res.json(languages);
});

export default router;
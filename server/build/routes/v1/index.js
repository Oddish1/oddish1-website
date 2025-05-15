import express from 'express';
// import all routes for v1 api here
const router = express.Router();
// router.use('/subroute', rootImport);
// define GET for homepage route '/'
router.get('/', (req, res) => {
    res.send('You\'re at the index!');
});
export default router;

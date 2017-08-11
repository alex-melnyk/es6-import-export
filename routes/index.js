import express from 'express';
import Models, {Post, Comment} from '../models';

const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

// module.exports = router;
export default router;

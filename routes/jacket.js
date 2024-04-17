var express = require('express');
var passport = require('passport');
const jacket_controlers= require('../controllers/jacket');
var router = express.Router();
/* GET jacket */
router.get('/', jacket_controlers.jacket_view_all_Page );
/* GET detail jacket page */
router.get('/detail', jacket_controlers.jacket_view_one_Page);
/* GET create jacket page */
router.get('/create', jacket_controlers.jacket_create_Page);
/* GET update jacket page */
//router.get('/update', jacket_controlers.jacket_update_Page);
/* GET delete jacket page */
//router.get('/delete', jacket_controlers.jacket_delete_Page);
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/update',secured, jacket_controlers.jacket_update_Page);
router.get('/delete',secured, jacket_controlers.jacket_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    
module.exports = router;


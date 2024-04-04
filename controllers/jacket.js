var jacket = require('../models/jacket');
// List of all jackets
exports.jacket_list = async function(req, res) {
try{
thejacket = await jacket.find();
res.send(thejacket);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.jacket_view_all_Page = async function(req, res) {
    try{
    thejacket = await jacket.find();
    res.render('jacket', { title: 'jacket Search Results', results: thejacket });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };



// for a specific jacket.
exports.jacket_detail = function(req, res) {
res.send('NOT IMPLEMENTED: jacket detail: ' + req.params.id);
};
// Handle jacket create on POST.
// Handle jacket create on POST.
exports.jacket_create_post = async function(req, res) {
console.log(req.body)
let document = new jacket();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"jacket_type":"goat", "cost":12, "cloth":"large"}
document.jacket_name = req.body.jacket_name;
document.cost = req.body.cost;
document.cloth = req.body.cloth;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle jacket delete from on DELETE.
exports.jacket_delete = function(req, res) {
res.send('NOT IMPLEMENTED: jacket delete DELETE ' + req.params.id);
};
// Handle jacket update form on PUT.
exports.jacket_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: jacket update PUT' + req.params.id);
};
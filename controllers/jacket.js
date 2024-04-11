var jacket = require('../models/jacket');
// List of all jackets
exports.jacket_list = async function (req, res) {
    try {
        thejacket = await jacket.find();
        res.send(thejacket);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.jacket_view_all_Page = async function (req, res) {
    try {
        thejacket = await jacket.find();
        res.render('jacket', { title: 'jacket Search Results', results: thejacket });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// for a specific jacket.
// for a specific Costume.
exports.jacket_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await jacket.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle jacket create on POST.
// Handle jacket create on POST.
exports.jacket_create_post = async function (req, res) {
    console.log(req.body)
    let document = new jacket();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"jacket_type":"goat", "cost":12, "cloth":"large"}
    document.jacket_name = req.body.jacket_name;
    document.cost = req.body.cost;
    document.cloth = req.body.cloth;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle jacket delete from on DELETE.
exports.jacket_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: jacket delete DELETE ' + req.params.id);
};
// Handle jacket update form on PUT.
//Handle Costume update form on PUT.
exports.jacket_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await jacket.findById(req.params.id)
        // Do updates of properties
        if (req.body.jacket_name)
            toUpdate.jacket_name = req.body.jacket_name;
        if (req.body.cloth) toUpdate.cloth = req.body.cloth;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle jacket delete on DELETE.
exports.jacket_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await jacket.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.jacket_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await jacket.findById( req.query.id)
    res.render('jacketdetail',
    { title: 'jacket Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a jacket.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jacket_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jacketcreate', { title: 'jacket Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a jacket.
// query provides the id
exports.jacket_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await jacket.findById(req.query.id)
res.render('jacketupdate', { title: 'jacket Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.jacket_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await jacket.findById(req.query.id)
    res.render('jacketdelete', { title: 'jacket Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
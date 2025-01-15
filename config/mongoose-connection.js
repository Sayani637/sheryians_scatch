const mongoose = require('mongoose');
const config = require('config');
const bdgr = require('debug')('development:mongoose');

mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    bdgr('Connected');
})
.catch(function(err){
    bdgr(err);
})

mongoose.exports = mongoose.connection; 
// User: dbuser
//Passowrd: gNOOMKjue1h3nlIM
//mongodb+srv://dbuser:<db_password>@clustercomp229.azdcj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCOMP229mongodb+srv://dbuser:<db_password>@clustercomp229.azdcj.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCOMP229

const { default: mongoose } = require("mongoose")

//Database setup
const mongoose = require('mongoose');

module.exports = function(){
 mongoose.connect(config.ATLASDB)
};
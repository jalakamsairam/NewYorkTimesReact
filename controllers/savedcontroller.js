const db = require("../models");

//defining methods for saved controllers

module.exports = {
    create:function(req,res){
        console.log("trying to save");
        db.Saved.create(req.body).
        then(dbModel=>res.json(dbModel)).catch(err=>res.status(422).json(err));
    },
    findAll:function(req,res){
        db.Saved.find(req.query)
        .sort({createdAt:-1})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
}
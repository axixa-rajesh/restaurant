export let getTable = function(req,res){
    res.send("hello table get");
}

export let createTable = function(req,res){
    res.send("hello table post");
}

export let updateTable = function(req,res){
    res.send("hello table patch");
}

export let deleteTable = function(req,res){
    res.send("hello table delete");
}

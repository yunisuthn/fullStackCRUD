var express = require("express")
  , redirect = require("express-redirect");
const fs = require('fs');

exports.accueil = function (req, res) {
    res.send('hello world')
}

exports.getList = function (req, res) {
    let read = fs.readFileSync('./Model/note.json', 'utf8')
    res.write(read)
    res.end()
}

exports.postList = function (req, res) {


    var Id = req.body.id
    var Nom = req.body.nom
    var Prenom = req.body.prenom


    var r = fs.readFileSync('./Model/note.json', 'utf8')
    var s = JSON.parse(r)
    var compt = 0;
    for (let i = 0; i < s.length; i++) {
        if (compt<s[i].id) {
            compt = s[i].id
        }
    }
    if (s.length==0) {
        compt = -1
    }
    console.log(Nom);

    if (Nom==0 && Prenom==0) {
        console.log(compt);
    }else{
        s.push({ "id": compt + 1, "nom": Nom, "prenom": Prenom })    
    }
    res.send(s)
    fs.writeFileSync('./Model/note.json', JSON.stringify(s))

}

exports.putList = function(req, res) {
    let read = fs.readFileSync('./Model/note.json', 'utf8')
    let customers=JSON.parse(read)
    var Id = req.body.id
    var id = parseInt(Id)
    var Nom = req.body.nom
    //res.redirect("http://localhost:3000")
    //res.redirect("http://localhost:8080") 
    let variable = 0
    for (let i = 0; i < customers.length; i++) {
         if(id == customers[i].id){
              variable = i
         }
    }
    if(req.body.nom == null){
         Nom = customers[variable].nom
    }
    var Prenom = req.body.prenom
    if(req.body.prenom == null){
         Prenom = customers[variable].prenom
    }
    let updateCustomer = { "id": id, "nom": Nom, "prenom": Prenom }
    if(customers[variable] != null){
        customers[variable] = updateCustomer
        // req.session.login(function () { 
        //     res.redirect(req.body.r); 
        // }); 
        //res.render("http://localhost:3000");
         
        console.log("----update Successfully, customers " + JSON.stringify(customers, null, 4));
        fs.writeFileSync('./Model/note.json', JSON.stringify(customers, null, 4))
        //res.redirect("http://localhost:3000");  
        res.end("update successsfuly" + JSON.stringify(updateCustomer, null, 4))
    }else{
        console.log(customers[variable]);
        res.end("Don't Exist customer :  \n" + JSON.stringify(updateCustomer,null, 4))
    }

}

exports.deleteList = function(req, res) {


    let read = fs.readFileSync('./Model/note.json', 'utf8')
    let customers=JSON.parse(read)
    var deleteCustomer = customers[req.body.id];
   
   delete customers.splice(req.body.id,1)
   console.log("-----After delete, customers list \n " + JSON.stringify(customers, null, 4));
   res.end("delete customer" + JSON.stringify(deleteCustomer, null, 4))
   fs.writeFileSync('./Model/note.json', JSON.stringify(customers, null, 4))
   
    
}
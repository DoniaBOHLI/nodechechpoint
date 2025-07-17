console.log( "HELLO WORLD")
//importez http "module local"
const http = require("http")
//importez http "module fs file system"
const fs = require('fs')
//creez un  serveur dans post 3000
//dans head j'ai specifié le type de text est le status"200"
http.createServer((req, res)=>{
       res.writeHead(200, {'Content-Type': 'text/html'});
      res.end("<h1>Bonjour Node !!!!</h1>");
    }).listen(3000)
//creation de nouveau document
// fs.writeFile("nom de fichier à creer", "contenu de fichier", fonction pour les error ou pour informer que tout marches )
fs.writeFile("welcome.txt", "Hello Node",  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
})
//  fs.readFile(nom du fiche du document , ces fonction  pour cest eurr est son texte)
fs.readFile("hello.txt", function(err, data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
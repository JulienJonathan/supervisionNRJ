const rp = require('request-promise');

const $ = require('cheerio');

const url = 'http://192.168.1.1';

let var1; let var2; let var3; let
  var4;

console.log('Lancement analyse miac cellule sollaire');

rp(url)
  .then((html) => {
    console.log('Premier test');
    var1 = $('#affichage_tension_systeme', html).text();
    var1 = parseInt(var1);
    console.log('Second test');
    console.log(html);
  })
  .catch((err) => {
  // error
    console.log(err);
  });

/*
/ Regarder final.html
afin d'intégrer les différentes variables
et enfin les enregistrer toutes les 5 min dans la base de données

 */
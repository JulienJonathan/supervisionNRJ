const rp = require('request-promise');
const $ = require('cheerio');
const Recuperation = require('./recuperation');

module.exports = class Solaire extends Recuperation {
  static retrieve() {
    const url = 'http://192.168.1.2';
    const variables = new Array(7);
    variables.fill('Non mesurée', 0, 6);
    console.log('Lancement analyse miac cellule sollaire');

    rp(url)
      .then((html) => {
        console.log('Premier test');
        variables[0] = $('#affichage_tension_systeme', html).text();
        variables[1] = $('#affichage_courant_panneau', html).text();
        variables[2] = $('#affichage_courant_baterrie', html).text();
        variables[3] = $('#affichage_courant_eolienne', html).text();
        variables[4] = $('#affichage_courant_total', html).text();
        variables[5] = $('#affichage_courant_irradiance', html).text();
        variables[6] = $('#affichage_temperature', html).text();
        for (let i = 0; i < 7; i + 1) {
          variables[i] = parseInt(variables[i], 10);
        }
        variables[0] = (22 * variables[0]) / 255;
        variables[1] = (12.8 * variables[1]) / 255;
        variables[2] = (12.8 * variables[2]) / 255;
        variables[3] = (12.8 * variables[3]) / 255;
        variables[4] = (12.8 * variables[4]) / 255;
        variables[5] = (12.8 * variables[5]) / 255;
        variables[6] = (12.8 * variables[6]) / 255;
      })
// eslint-disable-next-line no-unused-vars
      .catch((err) => {
      });
    return variables;
  }
};
/*
/ Regarder final.html
afin d'intégrer les différentes variables
et enfin les enregistrer toutes les 5 min dans la base de données

 */

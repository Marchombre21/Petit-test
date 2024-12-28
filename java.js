let xpSocial= 0;
let xpEconomie= 0;
let xpDroit= 0;
let sociabilité = 10;
let charisme = 30;
let health = 100;
let gold = 50;
let âge = 15;
let currentStuff = 0;
let fonctionCount = [];
let inventory = [];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const text = document.querySelector("#text");
const xpSocialText = document.querySelector("#xpsocialText");
const xpEconomieText = document.querySelector("#xpéconomieText");
const xpDroitText = document.querySelector("#xpdroitText");
const charismeText = document.querySelector("#xpcharismeText");
const sociabilitéText = document.querySelector("#xpsociabilitéText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const âgeText = document.querySelector("#ageText");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const finale = document.querySelector("#finale")
const phrasefinale = document.querySelector("#phrasefinale")
const buttonfinal = document.querySelector("#buttonfinal")

const stuffs = [
  { name: 'Zippo', prix: 10, charisme: 5, santé: -5, phrase: "Vous venez d'acheter un zippo. Pensez à le cacher à vos parents! Vous venez de gagner 5 en charisme mais -5 en santé! Et oui, vos parents auraient dû mieux vous mettre en garde sur les ravages de la cigarette!"},
  { name: 'costume', prix: 50, charisme: 10, santé: 0, phrase: "Vous venez d'acheter un costume! La classe! Vous gagnez 10 en charisme!"},
  { name: 'Mobylette', prix: 150, charisme: 15, santé: 0, phrase: "Vous venez d'acheter une mobylette! Faites attention sur la route! Vous gagnez 15 en charisme!"},
  { name: 'voiture', prix: 1500, charisme: 30, santé: 0, phrase: "Vous venez d'acheter une voiture! Attention, pas d'alcool au volant! Vous gagnez 30 en charisme!"},
  { name: 'maison', prix: 10000, charisme: 50, santé: 0, phrase: "Vous venez d'acheter une maison! Enfin débarrassé de vos parents! Vous gagnez 50 en charisme!"},
];

const actions = [
  {
    name: "étudier",
    "button text": ["Droit (60€)", "Économie (60€)", "Social (50€)", "Retour maison", "Retour maison"],
    "button functions": [étudieDroit, étudieEconomie, étudieSocial, retourMaison, retourMaison],
    text: "Vous passez un mois à étudier un sujet mais lequel?"
  },
  {
    name: "Sortir",
    "button text": ["En boite (70€)", "Au bar (40€)", "Soirée à la maison (20€)", "Retour maison", "Retour maison"],
    "button functions": [enBoite, auBar, soiréeMaison, retourMaison, retourMaison],
    text: "Rien ne vaut une bonne soirée avec ses amis pour décompresser. Où allez-vous la passer?"
  },
  {
    name: "Travail",
    "button text": ["Petit boulot", "Travail", "La carrière d'une vie (Final)", "Retour maison", "Retour maison"],
    "button functions": [petitsBoulots, travail, final, retourMaison, retourMaison],
    text: "Vous cherchez un travail."
  },
  {
    name: "Sport",
    "button text": ["1H (20€)", "3H (50€)", "5h (80€)", "Retour maison", "Retour maison"],
    "button functions": [uneHeure, troisHeures, cinqHeures, retourMaison, retourMaison],
    text: "Rien de tel que le sport pour retrouver la santé. Combien de temps allez-vous en faire?"
  },
  {
    name: "Magasin",
    "button text": [ () => "Acheter un(e) " + stuffs[currentStuff].name + " " + stuffs[currentStuff].prix + " euros.", "Retour maison", "Retour maison", "Retour maison", "Retour maison"],
    "button functions": [achat, retourMaison, easterEgg, retourMaison, retourMaison],
    text: "Vous entrez dans le magasin. C'est un magasin très spécial où il ne propose qu'un seul article à la fois. Vous devez l'acheter pour qu'il vous propose le suivant. Vous laisserez-vous tenter?"
  },
  {
    name: "Petit boulot",
    "button text": ["Caissier à McDo", "Ramasser les fruits", "Donner des cours particuliers", "Retour maison", "Retour maison"],
    "button functions": [caissier, maraicher, professeur, retourMaison, retourMaison],
    text: "Rien de tel que les petits boulots pour apprendre la valeur de l'argent. Lequel choisirez-vous?"
  },
  { 
    name: "Travail", 
    "button text": ["Éboueur", "RH", "Banquier", "Avocat", "Psychologue", "Retour maison"],
    "button functions": [éboueur, rh, banquier, avocat, psychologue, retourMaison], 
    text: "Le monde du travail, le vrai! On passe environs un tiers de sa vie au travail alors il faut bien choisir!" 
  },
  {
    name: "easter egg",
    "button text": ["2", "8", "Retour maison", "Retour maison", "Retour maison"],
    "button functions": [pickTwo, pickEight, retourMaison, retourMaison, retourMaison],
    text: "Alors comme ça on veut aller faire du sport juste après être allé au bar? On culpabilise? Haha bravo, tu as trouvé un easter egg. Choisi un des chiffres proposés. Dix numéros seront choisis aléatoirement entre 0 et 10. Si le numéro que tu choisis correspond à l'un des numéros aléatoires, tu gagnes !"
  },
  { 
    name: "Retour maison", 
    "button text": ["Étudier", "Sortir", "Trouver un travail", "Faire du sport", "Faire des achats"],
    "button functions": [étudier, sortir, travailler, sport, magasin], 
    text: "Bienvenue dans la vie de Léon BRIVES OPERON. En tant que tuteur légal, laissez-vous tenter par une simulation de sa vie." 
  },
  { 
    name: "Mort", 
    "button text": ["Recommencer", "Recommencer", "Recommencer", "Recommencer", "Recommencer"],
    "button functions": [restart, restart, restart, restart, restart], 
    text: "Vous êtes mort de vieillesse! J'espère que vous avez eu la vie que vous souhaitiez!"
 
  },
  { 
    name: "Mort d'abus", 
    "button text": ["Recommencer", "Recommencer", "Recommencer", "Recommencer", "Recommencer"],
    "button functions": [restart, restart, restart, restart, restart], 
    text: "Les rigueurs de la vie ont eu raison de vous! Des métiers éreintants, peut-être un peu trop de fêtes, tout ça vous a usé et vous ne pourrez jamais accéder à des métiers intéressants. J'espère que votre tuteur légal fera mieux avec le deuxième!"
 
  },
  { 
    name: "prévention", 
    "button text": ["Oui", "Non", "Recommencer", "Recommencer", "Recommencer"],
    "button functions": [vraiFinal, retourMaison, restart, restart, restart], 
    text: "Êtes-vous sûr de vouloir choisir maintenant? Votre métier final est choisi en fonction de votre expérience actuelle dans les trois domaines proposés et vous ne pourrez plus revenir en arrière!"
  },
];

button1.onclick = étudier;
button2.onclick = sortir;
button3.onclick = travailler;
button4.onclick = sport;
button5.onclick = magasin;

function update(actions) {
  fonctionCount.push('update');
  checkEasterEgg();
  finale.style.display = "none";
  button5.style.display = "none";
  button4.style.display = "none";
  button3.style.display = "none";
  button2.style.display = "none";
  button6.style.display = "none";
  button1.innerText = typeof actions["button text"][0] === "function" 
    ? actions["button text"][0]() 
    : actions["button text"][0];
  button2.innerText = actions["button text"][1];
  button3.innerText = actions["button text"][2];
  button4.innerText = actions["button text"][3];
  button5.innerText = actions["button text"][4];
  button6.innerText = actions["button text"][5];
  button1.onclick = actions["button functions"][0];
  button2.onclick = actions["button functions"][1];
  button3.onclick = actions["button functions"][2];
  button4.onclick = actions["button functions"][3];
  button5.onclick = actions["button functions"][4];
  button6.onclick = actions["button functions"][5];
  text.innerHTML = actions.text;
}

function étudier() {
  update(actions[0]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
}

function sortir() {
  fonctionCount.push('sortir');
  update(actions[1]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
}

function travailler() {
  update(actions[2]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
}

function sport() {
  fonctionCount.push('sport');
  update(actions[3]);
  checkEasterEgg();
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
}

  function magasin() {
    if(currentStuff < stuffs.length){
      update(actions[4]);
      button2.style.display = "inline";
}else{
  text.innerText = "Félicitation, vous avez acheté tous les articles disponibles!"
<<<<<<< HEAD
=======
}
>>>>>>> f3fb7da38a271ad672b10567706f44e1ce7af5d4
}
}

function petitsBoulots() {
  update(actions[5]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
}

function travail() {
  update(actions[6]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
  button5.style.display = "inline";
  button6.style.display = "inline";
}


function temps(){
  âge += 1;
  âgeText.innerText = parseFloat(âge.toFixed(1));
  if(âge <= 35){
    health += 2;
    healthText.innerText = health;
  }else if (âge > 35 & âge < 100){
    health -= 2;
    healthText.innerText = health;
    healthy();
  }else {
    update(actions[9]);
  } 
}

function tempsEtudes(){
  âge += 0.5;
  âgeText.innerText = parseFloat(âge.toFixed(1));
  if(âge <= 35){
    health += 2;
    healthText.innerText = health;
  }else if (âge > 35 & âge < 100){
    health -= 2;
    healthText.innerText = health;
    healthy();
  }else {
    update(actions[9]);
  } 
}

function updateButtons() {
  if (currentStuff < stuffs.length) {
    button1.innerText =
      "Acheter un(e) " + stuffs[currentStuff].name + " " + stuffs[currentStuff].prix + " euros.";
  }
}

function achat() {
  if (currentStuff < stuffs.length) {
    if (gold >= stuffs[currentStuff].prix) {
      gold -= stuffs[currentStuff].prix;
      goldText.innerText = gold;
      let newStuff = stuffs[currentStuff].name;
      text.innerText = stuffs[currentStuff].phrase;
      charisme += stuffs[currentStuff].charisme;
      charismeText.innerText = charisme;
      health += stuffs[currentStuff].santé;
      healthText.innerText = health;
      inventory.push(newStuff);
      currentStuff++;
      updateButtons();
      text.innerText += " Tu possèdes maintenant : " + inventory;
    } else {
      text.innerText = "Tu n'as pas assez d'argent pour acheter ça. Va travailler!";
    }
  } else {
    text.innerText = "Tu as déjà acheté tout le magasin!";
  }
}

function retourMaison() {
  fonctionCount.push('retourMaison');
  update(actions[8]);
  button2.style.display = "inline";
  button3.style.display = "inline";
  button4.style.display = "inline";
  button5.style.display = "inline";
}

function étudieDroit() {
  if (gold >= 60) {
    gold -= 60;
    xpDroit += 30;
    goldText.innerText = gold;
    xpDroitText.innerText = xpDroit;
    text.innerText = "Vous passez six mois à étudier le Droit. Vous gagnez 30 d'expérience dans ce domaine."
    tempsEtudes();
  } else {
    text.innerText = "Vous n'avez pas assez d'argent pour faire ce cursus. Allez travailler!";
  }
}

function étudieEconomie() {
  if (gold >= 60) {
    gold -= 60;
    xpEconomie += 30;
    goldText.innerText = gold;
    xpEconomieText.innerText = xpEconomie;
    text.innerText = "Vous passez six mois à étudier l'Économie. Vous gagnez 30 d'expérience dans ce domaine."
    tempsEtudes();
  } else {
    text.innerText = "Vous n'avez pas assez d'argent pour faire ce cursus. Allez travailler!";
  }
}
function étudieSocial() {
  if (gold >= 50) {
    gold -= 50;
    xpSocial += 30;
    goldText.innerText = gold;
    xpSocialText.innerText = xpSocial;
    text.innerText = "Vous passez six mois à étudier la Sociologie. Vous gagnez 30 d'expérience dans ce domaine."
    tempsEtudes();
  } else {
    text.innerText = "Vous n'avez pas assez d'argent pour faire ce cursus. Allez travailler!";
  }
}

function enBoite() {
  if (âge >= 16){
  if (currentStuff > 2){
  if(gold >= 70){
    gold -= 70;
    goldText.innerText = gold;
    health -= 5;
    healthText.innerText = health;
    sociabilité += 20;
    sociabilitéText.innerText = sociabilité;
    charisme += 40;
    charismeText.innerText = charisme;
    text.innerText = "Vous allez en boite avec des amis. Vous perdez 5 de santé mais gagnez 20 en sociabilité et 40 en charisme."
    healthy();
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}else {
  text.innerText = "Désolé monsieur ça ne va pas être possible. Le dress-code exige une qualité que vous n'avez pas encore."
}
}else {
  text.innerText = "Aller rentre chez toi gamin! Interdit aux moins de 16 ans ici!"
}
}

function auBar() {
  if(âge >= 16){
  if(gold >= 40){
    fonctionCount.push('auBar');
    gold -= 40;
    goldText.innerText = gold;
    health -= 10;
    healthText.innerText = health;
    
    sociabilité += 25;
    sociabilitéText.innerText = sociabilité;
    charisme += 10;
    charismeText.innerText = charisme;
    
    text.innerText = "Vous allez au bar avec des amis. Vous perdez 10 de santé mais gagnez 25 en sociabilité et 10 en charisme."
    healthy();
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}else {
  text.innerText = "Vous êtes beaucoup trop jeune pour trainer dans un endroit pareil voyons! Mais qui vous a éduqué?"
}
}
function soiréeMaison() {
  if(gold >= 20){
    gold -= 20;
    goldText.innerText = gold;
    health -= 15;
    healthText.innerText = health;
    
    sociabilité += 10;
    sociabilitéText.innerText = sociabilité;
    charisme += 5;
    charismeText.innerText = charisme;
    text.innerText = "Vous faites une soirée chez vous. Vous perdez 15 de santé mais gagnez 10 en sociabilité et 5 en charisme."
    healthy();
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}



function uneHeure() {
  if(gold >= 20){
    gold -= 20;
    goldText.innerText = gold;
    health += 5;
    healthText.innerText = health;
    sociabilité += 3;
    sociabilitéText.innerText = sociabilité;
    charisme += 5;
    charismeText.innerText = charisme;
    text.innerText = "Vous faites du sport pendant une heure. Vous gagnez 5 de santé, 3 en sociabilité et 5 en charisme."
    
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}

function troisHeures() {
  if(gold >= 50){
    gold -= 50;
    goldText.innerText = gold;
    health += 15;
    healthText.innerText = health;
    sociabilité += 3;
    sociabilitéText.innerText = sociabilité;
    charisme += 5;
    charismeText.innerText = charisme;
    text.innerText = "Vous faites du sport pendant trois heures. Vous gagnez 15 de santé, 3 en sociabilité et 5 en charisme."
    
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}

function cinqHeures() {
  if(gold >= 80){
    gold -= 80;
    goldText.innerText = gold;
    health += 30;
    healthText.innerText = health;
    sociabilité += 3;
    sociabilitéText.innerText = sociabilité;
    charisme += 5;
    charismeText.innerText = charisme;
    text.innerText = "Vous faites du sport pendant cinq heures. Vous gagnez 30 de santé, 3 en sociabilité et 5 en charisme."
    
  }else{
    text.innerText = "Vous n'avez pas assez d'argent pour faire cette activité. Allez travailler!"
  }
}

function caissier(){
  if (âge <= 25){
  gold += 100;
  goldText.innerText = gold;
  âge += 0.5;
  âgeText.innerText = parseFloat(âge.toFixed(1));
  charisme -= 2;
  charismeText.innerText = parseFloat(charisme.toFixed(1));
  health -= 0.5;
  healthText.innerText = parseFloat(health.toFixed(1));
  text.innerText = "Vous faites le service au McDo le plus proche pendant la moitié de l'année. Vous arrivez à économiser 100€ et perdez 2 en charisme et 0.5 en santé."
  healthy();
}else{
    text.innerText = "Vous êtes trop vieux pour faire ce métier."
  }
}


function maraicher(){
  if (currentStuff >= 3){
  if (âge <= 25){
    gold += 300;
    goldText.innerText = gold;
    âge += 0.5;
    âgeText.innerText = parseFloat(âge.toFixed(1));   
    text.innerText = "Vous passez la moitié de l'année en tant que maraicher. Vous arrivez à économiser 300€."
  }else{
      text.innerText = "Vous êtes trop vieux pour faire ce métier."
    }
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. Et oui les campagnes sont mal desservies en transports."
  }
}

function professeur(){
  if (xpDroit >= 60 || xpEconomie >= 60 || xpSocial >= 60){
  if (âge <= 25){
    gold += 300;
    goldText.innerText = gold;
    âge += 0.5;
    âgeText.innerText = parseFloat(âge.toFixed(1)); 
    charisme += 1;
    charismeText.innerText = charisme  
    sociabilité += 1;
    sociabilitéText.innerText = sociabilité;
    text.innerText = "Vous allez aider un jeune en difficulté dans votre spécialité pendant six mois. Vous arrivez à économiser 300€ et gagnez 1 en charisme et en sociabilité."
  }else{
      text.innerText = "Vous êtes trop vieux pour faire ce métier."
    }
 }else {
  text.innerText = "Vous n'avez pas assez d'expérience dans un domaine en particulier pour pouvoir donner des cours. Non mais vous vous êtes pris pour qui?"
 }
}

function éboueur(){
  if(âge >= 18){
    if (currentStuff >= 3){
    health -= 5;
    gold += 1000;
    goldText.innerText = gold;
    charisme -= 2;
    charismeText.innerText = charisme;
    temps();
    text.innerText = "Vous êtes éboueur pendant un an. Vous économisez 1000€ mais perdez 2 de charisme."
    healthy();
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. A votre âge il serait temps d'y penser, vous ne croyez pas?"
  }
}else {
  text.innerText = "Vous êtes trop jeune pour faire ce métier. Soyez patient."
}
}

function rh(){
  if(âge >= 18){
    if (currentStuff >= 3){
      if (xpSocial >= 120){
    gold += 1300;
    goldText.innerText = gold;
    charisme += 2;
    charismeText.innerText = charisme;
    sociabilité += 5;
    sociabilitéText.innerText = sociabilité;
    xpSocial += 10;
    xpSocialText.innerText = xpSocial;
    temps();
    text.innerText = "Vous êtes dans les ressources humaines pendant un an. Vous économisez 1300€, gagnez 10 d'expérience dans le social, 2 de charisme et 5 de sociabilité."
      }else {
        text.innerText = "Nous sommes au regret de vous annoncer que votre candidature n'a pas été retenue.(Vous n'avez pas assez d'expérience en Social)"
      }
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. A votre âge il serait temps d'y penser, vous ne croyez pas?"
  }
}else {
  text.innerText = "Vous êtes trop jeune pour faire ce métier. Soyez patient."
}
}

function banquier(){
  if(âge >= 18){
    if (currentStuff >= 3){
      if (xpEconomie >= 150){
    gold += 1500;
    goldText.innerText = gold;
    sociabilité += 3;
    sociabilitéText.innerText = sociabilité;
    xpEconomie += 20;
    xpEconomieText.innerText = xpEconomie;
    temps();
    text.innerText = "Vous êtes banquier pendant un an. Vous économisez 1500€, gagnez 20 d'expérience en Économie et 3 de sociabilité."
      }else {
        text.innerText = "Nous sommes au regret de vous annoncer que votre candidature n'a pas été retenue.(Vous n'avez pas assez d'expérience en Économie)"
      }
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. A votre âge il serait temps d'y penser, vous ne croyez pas?"
  }
}else {
  text.innerText = "Vous êtes trop jeune pour faire ce métier. Soyez patient."
}
}

function avocat(){
  if(âge >= 18){
    if (currentStuff >= 3){
      if (xpDroit >= 150){
    gold += 1600;
    goldText.innerText = gold;
    charisme += 5;
    charismeText.innerText = charisme;
    sociabilité += 2;
    sociabilitéText.innerText = sociabilité;
    xpDroit += 20;
    xpDroitText.innerText = xpDroit;
    temps();
    text.innerText = "Vous êtes avocat pendant un an. Vous économisez 1600€, gagnez 20 d'expérience en Droit, 5 de charisme et 2 de sociabilité."
      }else {
        text.innerText = "Nous sommes au regret de vous annoncer que votre candidature n'a pas été retenue.(Vous n'avez pas assez d'expérience en Droit)"
      }
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. A votre âge il serait temps d'y penser, vous ne croyez pas?"
  }
}else {
  text.innerText = "Vous êtes trop jeune pour faire ce métier. Soyez patient."
}
}

function psychologue(){
  if(âge >= 18){
    if (currentStuff >= 3){
      if (xpSocial >= 120){
    gold += 1000;
    goldText.innerText = gold;
    charisme += 2;
    charismeText.innerText = charisme;
    sociabilité += 5;
    sociabilitéText.innerText = sociabilité;
    xpSocial += 20;
    xpSocialText.innerText = xpSocial;
    temps();
    text.innerText = "Vous êtes psychologue pendant un an. Vous économisez 1000€, gagnez 20 d'expérience dans le social, 2 de charisme et 5 de sociabilité."
      }else {
        text.innerText = "Nous sommes au regret de vous annoncer que votre candidature n'a pas été retenue.(Vous n'avez pas assez d'expérience en Social)"
      }
  }else {
    text.innerText = "Vous devez être véhiculé pour faire ce métier. A votre âge il serait temps d'y penser, vous ne croyez pas?"
  }
}else {
  text.innerText = "Vous êtes trop jeune pour faire ce métier. Soyez patient."
}
}
function final() {
  if(âge >= 18){
  update(actions[11]);
  button2.style.display = "inline";
}else {
  text.innerText = "Non mais on n'attaque pas un jeu par la fin voyons! Il faut jouer un peu quand même!"
}
}

function vraiFinal(){
finale.style.display = "flex";
buttonfinal.onclick = restart;
  if(xpDroit >= 1000 && xpEconomie >= 1000 && xpSocial >= 1000){
    phrasefinale.innerText = "Félicitation! Vous voilà Astronaute! C'est la plus grande distinction de cette vie! Ceux qui vous ont éduqué devaient être exceptionnels!"
  }else if(xpDroit > xpEconomie && xpDroit > xpSocial){
    if(xpDroit >= 1000){
      phrasefinale.innerText = "Félicitation! Vous êtes devenu Juge à la cour suprême! Tout le monde vous appelle votre honneur! Vos parents doivent être très fiers!"
    }else{
      phrasefinale.innerText = "Pas mal, vous êtes devenu Inspecteur du travail! Vous auriez pu mieux faire mais c'est mieux que rien!"
    }
  }else if(xpEconomie > xpDroit && xpEconomie > xpSocial){
    if(xpEconomie >= 1000){
      phrasefinale.innerText = "Félicitation! Elon Musk lui-même vous consulte pour avoir vos avis avisés d'Analyste financier! Vous êtes incroyable!"
    }else {
      phrasefinale.innerText = "C'est bien, vous êtes devenu Responsable des achats dans une PME! C'est respectable mais on attendait mieux de vous."
    }
  }else if(xpSocial > xpDroit && xpSocial > xpEconomie){
    if(xpSocial >= 1000){
      phrasefinale.innerText = "Aïe aïe aïe! Vous êtes devenu ce que la gauche fait de pire! Un gauchiste riche! Vous êtes Responsable d'un établissement social, vous allez au marché bio en 4X4, ne mangez que du tofu importé de Taiwan et faites des cures de pierres magiques à 500 euros la séance! Espérons que vos parents fassent mieux avec le deuxième! "
    }else{
      phrasefinale.innerText = "Et c'est la cata! Vous avez commencé par prendre des cours de cirque au lycée ce qui vous a permis de découvrir une passion pour les bolas. Après votre année sabbatique pour vous recentrer vous êtes tout naturellement devenu Animateur socio-culturel. Un grand mot pour dire que vous faites des bolas devant des enfants. Vous portez des sarouels à 35 ans, fumez des roulées et utilisez des mots comme iel."
    }
  }else{
    phrasefinale.innerText = "Bravo! Vous n'avez jamais été capable de choisir une voie plutôt qu'une autre et vous voilà devenu un Employé de bureau bien rangé! Vous n'avez jamais fait de vagues et comptez bien continuer comme ça encore longtemps! Ce n'est peut-être pas la vie la plus trépidante que vous avez choisie mais elle en contente plus d'un."
  }
}

function restart() {
  xpSocial= 0;
  xpEconomie= 0;
  xpDroit= 0;
  sociabilité = 10;
  charisme = 30;
  health = 100;
  gold = 50;
  âge = 15;
  currentStuff = 0;
  inventory = [];
  goldText.innerText = gold;
  healthText.innerText = health;
  xpSocialText.innerText = xpSocial;
  charismeText.innerText = charisme;
  sociabilitéText.innerText = sociabilité;
  xpEconomieText.innerText = xpEconomie;
  xpDroitText.innerText = xpDroit;
  âgeText.innerText = âge;
  retourMaison();
}

function healthy() {
  if (health <= 0) {
    console.log(actions[10]);
    update(actions[10]);
  }
}

function checkEasterEgg() {
  if (
    fonctionCount.length >= 6 &&
    fonctionCount[fonctionCount.length-6] === 'update' &&
    fonctionCount[fonctionCount.length-5] === 'auBar' &&
    fonctionCount[fonctionCount.length-4] === 'retourMaison' &&
    fonctionCount[fonctionCount.length-3] === 'update' &&
    fonctionCount[fonctionCount.length-2] === 'sport' &&
    fonctionCount[fonctionCount.length-1] === 'update') 
    {
    setTimeout(() => { 
    easterEgg();
    fonctionCount = [];
      }, 100);
  }
}

function easterEgg() {
  update(actions[7]);
  button2.style.display = "inline";
  button3.style.display = "inline";
}

function pickTwo() {
  pick(2);
}

function pickEight() {
  pick(8);
}

function pick(guess) {
  const numbers = [];
  while (numbers.length < 10) {
    numbers.push(Math.floor(Math.random() * 11));
  }
  text.innerText = "Tu as choisi " + guess + ". Et voici la liste des numéros aléatoires:\n";
  for (let i = 0; i < 10; i++) {
    text.innerText += numbers[i] + "\n";
  }
  if (numbers.includes(guess)) {
    text.innerText += "Bravo! Tu gagnes 20€!";
    gold += 20;
    goldText.innerText = gold;
  } else {
    text.innerText += "Pas de chance! Tu perds 10 de santé!";
    health -= 10;
    healthText.innerText = health;
    healthy();
  }
}

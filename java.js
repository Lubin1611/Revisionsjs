var listeVoitures = ["Renault","Volvo","Citroen"];

maFonction();

var nomDeVoiture = "Peugeot";

var x = 50;
var w = 10 + 5;
var z =  w;
var d  = z + w;

var prenom = "John" , nom = "doe", age = 35;

document.getElementById("demo").innerHTML = w + " " + d;

alert(10 * 5);
alert(10 / 2);

var resultat = 15 / 9;

alert("15" + " / " + " 9" + " = " + resultat);

var l = 10, k = 5, l = l + k;

alert(l);

function maFonction () {

    alert("Salut tout le monde ! ");

}

function maFonctionDeRetour () {

    return "Bonjour!";

}

document.getElementById("demoRetour").innerHTML = maFonctionDeRetour();

var bouton = document.createElement("button");
bouton.id = "monBouton";
bouton.innerHTML = "Cliquez";
document.body.appendChild(bouton);

var maBoite = function() {

    alert("anonyme");
};

document.getElementById("monBouton").addEventListener("click", function () {

    maBoite();

});

var divOver = document.createElement("div");
divOver.id = "changeSurOver";
document.body.appendChild(divOver);

var fondRouge = function () {

    document.getElementById("changeSurOver").style.backgroundColor = "red";
};

document.getElementById("changeSurOver").addEventListener("mouseover", function () {

    fondRouge();

});

var txt = "une longue phrase";
var longueur = txt.length;

alert(longueur);

var str1 = "Bonjour";
var str2 = "le monde!";

alert(str1 + str2);

var maVoiture = listeVoitures[1];

listeVoitures[0] = "Ford";

alert(listeVoitures);

listeVoitures.pop();

listeVoitures.push("Ferrari");

var rNumber = Math.random()* 10;

alert(rNumber);

var fNumber = 65.7;
var arrondi = Math.round(fNumber);

alert(arrondi);

var nombreUn = 10;

var nombreDeux = 5;

if (nombreUn > nombreDeux) {

    alert("nombreUn est supérieur à nombreDeux");

}

var nombreTrois = 10;

var nombreQuatre = 10;

if (nombreTrois == nombreQuatre) {

    alert("nombreTrois est égal à nombreQuatre");

}

if (nombreUn !== nombreDeux) {

    alert("nombreUn n'est pas égal à nombreDeux");
}

for(var i = 0; i < 10; i++) {

    console.log(i);

}

var fruits = ["pomme","banane","poire"];

for (var j = 0; j < fruits.length; j ++) {

    console.log(j);

}

var dd = 1;

while( dd < 10)
{
    document.write(dd + "<br>");
    dd++;
}

var pc = 1;

while( pc < 10)
{
    document.write(pc);
    pc = pc + 2;
}

for (var toto = 0; toto <= 10; toto++ ) {

    if (toto == 5) {

        alert("J'ai fini mes révisions");
        console.log(toto);
    }
}
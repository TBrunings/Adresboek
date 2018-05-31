// adresboek-1.js

var document = '';
var uitvoer = document.getElementById('uitvoer');
// constructor voor kaarten/personen
function Kaart(voornaam, achternaam, tussenvoegsel, adres, postcode, plaats, mail, telefoon) {
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.tv = tussenvoegsel;
    this.adres = adres;
    this.postcode = postcode;
    this.woonplaats = plaats.toUpperCase();
    this.mail = mail;
    this.telefoon = telefoon;
}

var theo = new Kaart('Theo', 'Blanken', 'den', 'Contactweg 36', '1014 AN', 'Amsterdam', 't.denblanken@ma-web.nl', '020 - 850 95 00');
var adri = new Kaart('A.M.A.J.', 'Boogaards', '', 'Van Breestraat 58', '1071 ZR', 'Amsterdam', 'a.boogaards@gmail.com', '020 - 87 32 651');
var linda = new Kaart('Linda', 'Boogaards', '', 'Koningin Maximalaan 45', '1045 NH', 'Amsterdam', 'l.boogaards@gmail.com', '020 - 56 23 912');
var rinus = new Kaart('Rinus', 'Jong', 'de', 'Julianalaan 29', '1128 KG', 'Lelystad', 'rinus@gmail.com', '020 - 20 51 894');

var adresboek = [theo, adri, linda, rinus];


var eenKaartUitvoeren = function (iemand) {
    var element = document.createElement('div');
    // element.onclick = function () {
    //     alert("Op kaart geklikt");
    //  };

    element.className = 'kaart';

    // naam
    var naamParagraaf = document.createElement('p');
    naamParagraaf.onclick = function () {
       alert("Op naam geklikt: " + naamParagraaf.innerHTML);             // later netter maken
       var person = prompt("Bewerk de naam: ", naamParagraaf.innerHTML); // vraag een nieuwe waarde

       naamParagraaf.innerHTML = 'naam: ' + person;                                 // ik overschrijf oude waarde met nieuwe waarde
                                                                         // evt. scherm verversen of het adresboek bijwerken
    };
    var naamInhoud = document.createTextNode('naam: ' + iemand.voornaam + ' ' + iemand.tv + ' ' + iemand.achternaam);
    naamParagraaf.appendChild(naamInhoud);
    element.appendChild(naamParagraaf);

    // adres
    var adresParagraaf = document.createElement('p');
    adresParagraaf.onclick = function () {
       alert("Op adres geklikt: " + adresParagraaf.innerHTML);
       var person = prompt("Bewerk het adres: ", adresParagraaf.innerHTML);
       adresParagraaf.innerHTML = ' adres: ' + person;
    };
    var adresInhoud = document.createTextNode('adres: ' + iemand.adres);
    adresParagraaf.appendChild(adresInhoud);
    element.appendChild(adresParagraaf);

    // postcode + plaats
    var postcodeParagraaf = document.createElement('p');
    postcodeParagraaf.onclick = function () {
       alert("Op postcode/plaats geklikt: " + postcodeParagraaf.innerHTML);
       var person = prompt("Bewerk de postcode/plaats: ", postcodeParagraaf.innerHTML);
       postcodeParagraaf.innerHTML = 'postcode/plaats: ' + person.toUpperCase();
    };
    var postcodeInhoud = document.createTextNode('postcode/plaats: ' + iemand.postcode + ' ' + iemand.woonplaats);
    postcodeParagraaf.appendChild(postcodeInhoud);
    element.appendChild(postcodeParagraaf);

    // mail
    var mailParagraaf = document.createElement('p');
    mailParagraaf.onclick = function () {
       alert("Op e-mail geklikt: " + mailParagraaf.innerHTML);
       var person = prompt("Bewerk het e-mailadres: ", mailParagraaf.innerHTML);
       mailParagraaf.innerHTML = 'e-mail: ' + person;
    };
    var mailInhoud = document.createTextNode('e-mail: ' + iemand.mail);
    mailParagraaf.appendChild(mailInhoud);
    element.appendChild(mailParagraaf);

    // telefoon
    var telefoonParagraaf = document.createElement('p');
    telefoonParagraaf.onclick = function () {
       alert("Op telefoonnummer geklikt: " + telefoonParagraaf.innerHTML);
       var person = prompt("Bewerk het telefoonnummer: ", telefoonParagraaf.innerHTML);
       telefoonParagraaf.innerHTML = 'telefoon: ' + person;
    };
    var telefoonInhoud = document.createTextNode('telefoon: ' + iemand.telefoon);
    telefoonParagraaf.appendChild(telefoonInhoud);
    element.appendChild(telefoonParagraaf);

    uitvoer.appendChild(element);
};

var allesUitvoeren = function () {
    uitvoer.innerHTML = '';
    for (var iemand in adresboek) {
        eenKaartUitvoeren(adresboek[iemand]);
    }
}

/*   oefening kaart verwijderen
function kaartVerwijderen () {
  var html = [
      '<div> A line</div>',
      '<div> Add more lines</div>',
      '<div> To the array as you need.</div>'
  ].join('');
  var div = document.createElement('div');
      div.setAttribute('class', 'post block bc2');
      div.innerHTML = html;
      document.getElementById('posts').appendChild(div);
Elke kaart een knop om te verwijderen.
Als op de knop wordt gedrukt, dan kaart verwijderen.
Scherm refresh.
}
*/

function nieuwContact () {
    var tempKaart = new Kaart('-', '-', '-', '-', '-', '-', '-', '-');
    adresboek = adresboek + tempKaart;
    eenKaartUitvoeren(tempKaart);
}

// CONTACT TOEVOEGEN uit Codecademy

var add = function(voornaam, achternaam, tussenvoegsel, adres, postcode, plaats, mail, telefoon)  {
    var newContact={
        voornaam: voornaam,
        achternaam: achternaam,
        tv: tussenvoegsel,
        adres: adres,
        postcode: postcode,
        woonplaats: plaats,
        mail: mail,
        telefoon: telefoon
    }
    adresboek[adresboek.length] = newContact;
 }

add ('Bert', 'Venema', ' ', 'Zonnebloemstraat 93', '7766 TS', 'Klazienaveen', 'bert.venema@hotmail.nl', '0591 - 93 27 40');

allesUitvoeren();

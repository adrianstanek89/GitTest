//OBIEKT
//var samochod = {
//    pojemnosc:2400,
//    moc:90,
//    silnik:'tdi',
//    marka: {
//        test:'test'
//    }
//};
//
//samochod.marka.producent = 'Opel';
//samochod.marka.model = 'Corsa';
//
//console.log(samochod);

//TABLICA
var tablica = [
    "element pierwszy",
    "drugi element",
    "trzeci elemsent",
    "czwarty element w srodku",
];

//var druga = ['jeden',['dwa','trzy']];
//tablica.push(druga);

var y = "element";

var i = 0;
//WHILE - dopoki warunki w nawiasach sa spelnione, wykonuj w petli instrukcje
while ((tablica[i].indexOf(y) < 0) && (i < tablica.length - 1)) {
    //to sie wykonuje tyle razy, az ktorys warunkow przestanie byc spelniony 
    i++;
}

console.log('znalazłem element na ' + i + 'pozycji');
//albo 'nie znalazlem'

//FOR
//warunek poczatkowy; warunek petli; skok petli
for (i = 0; i < tablica.length; i++) {
    //SWITCH - wykonuje instrukcje zaleznie od wartosci warunku    
    switch (tablica[i].search(y)) {
        //jesli wartosc = 0
        case 0:
            console.log(i + '- jest na poczatku');
            //przerywa cokolwiek
            break;
            //jesli element znaleziono na pozycji (dlugosc_wzorca - dlugosc_elementu), czyli na koncu    
        case (tablica[i].length - y.length):
            console.log(i + '- jest na koncu');
            break;
        case -1:
            console.log(i + '- nie ma go');
            break;
            //w pozostalych przypadkach    
        default:
            console.log(i + '- gdzies tam jest');
            break;
    }

}




//FOR
function tabliczkaMnozenia() {
    a = " ";
    for (j = 0; j < 58; j++)
        a += '-';
    console.log(a);
    a = "|";
    for (i = 1; i < 11; i++) {
        for (j = 1; j < 11; j++) {
            if (i * j > 99)
                a += (i * j);
            else if (i * j > 9) {
                a += ' ';
                a += (i * j);
            } else {
                a += '  ';
                a += (i * j);
            }
            a += ' | ';
        }
        console.log(a);
        a = " ";
        for (j = 0; j < 58; j++)
            a += '-';
        console.log(a);
        a = "|";
    }
}


//WHILE
var a = 1;
var b = 1;

while (a < b) {
    a++;
    console.log(a);
}

a = 1;
b = 1;

do {
    a++;
    //console.log(a);
} while (a < b)


function losowa(maks) {
    var x = Math.random(); //liczba losowa od 0 do 1
    x *= maks;
    x = Math.floor(x); //zaokragla w dol, Math.ceil() zaokragla w gore
    return x;
}

//rekurencja - funkcja wywoluje sama siebie
function silnia(x) {
    if (x <= 1)
        return 1;
    else {
        return x * silnia(x - 1);
    }
}

//trojkat pascala z uzyciem silni
function trojkatpascala(ile) {
    a = "";
    var n = 1,
        u = 1,
        b = 1;
    for (i = 0; i < ile; i++) {
        for (j = 0; j <= i; j++) {
            n = silnia(i);
            u = silnia(j);
            b = silnia(i - j);
            u *= b;
            n /= u;
            a += n;
            a += " ";
        }

        console.log(a);
        a = "";
        n = 1, u = 1, b = 1;
    }
}
//szukajka
function szukasz(a, b) {

    //console.log(a.length);

    for (i = 0; i < a.length; i++) {

        if ((a[i].length > 1) && (typeof a[i] == typeof [0, 0])) {

            //console.log('Bump' + i + a[i]);

            return szukasz(a[i], b);

        } else {

            if (a[i].search(b) >= 0) {

                return ["Znalazlem, mon! To ", a[i], ", czyz nie?"].join("");

                break;

            }

        }

    }

    return 'Nie znalazłem, mon :c';

}

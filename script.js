//alert('komunikat');
//var x = 1;
//var y = 2;
//var z= x + y;
//var a = 125;
//var b = 134;
//var c = a * b;
//var y = z * c;

//console.log(z);
//console.log(y);
//console.log(x==y);
//console.log(c==a*b);
//alert(c==a*b)


//console.log(typeof x);

//var w = 'czwarty element'



var tablica = [
   'pierwszy element', 'drugi element', 'trzeci element', 'czwarty element jest']
//var druga = ['jeden',['dwa','trzy']]
//tablica.push(druga);
console.log(tablica);
var y = 'element';


//var i = 0;
//while ((tablica[i].indexOf(y) < 0) && (i < tablica.length - 1)) {

//  i++;
//}
//console.log(i);



//var a = 11;
//console.log(losowa(100));


function losowa(maks) {
    x = Math.random();
    x *= maks;
    x = Math.floor(x);
    return x;
}

function znajdz(tablica, element) {
    return
}


function znajdz(tablica, element) {
    var i = 0;
    while ((tablica[i].indexOf(element) < 0) && (i < tablica.length - 1)) {
        i++;
    }
    if ((i >= tablica.length - 1) && (tablica[i].indexOf(element) < 0)) {
        return -1;
    }
    return i;
}

//console.log(search(tablica, y));


//a = "";
//for (i = 1; i < 11; i++)
//{
//   for(j=1; j<11; j++)
//   {
//      if(i*j>99)
//          a += (i * j).toPrecision();
//     else if(i*j>9)
//      {
//         a += ' (';
//         a += (i * j).toPrecision();
//    }
//  else
//       {
//         a += '( ';
//       a += (i * j).toPrecision();
//}
//a += ' )';
//}
//console.log(a);
//a = "";
//}









//for (i = 0; i < tablica.length; i++) {
//    switch (tablica[i].search(y)) {
//        case 0:
//            console.log(i + '- jest na poczatku');
//            break;
//        case (tablica[i].length - y.length):
//            console.log(i + '- jest na koncu');
//            break;
//        case -1:
//            console.log(i + '- nie ma go');
//            break;
//        default:
//            console.log(i + '- gdzies tam jest');
//            break;
//    }
//}
//
//function pt(lineLimit, lines) {
//    // Seed the first value.
//    if (!lines || lines.length === 0) return pt(lineLimit, [[1]]);
//
//    var newLine = [];
//    var lastLine = lines[lines.length - 1];
//
//    // Fill out inner values
//    for (var i = 1, len = lastLine.length; i < len; i++) {
//        newLine.push(lastLine[i - 1] + lastLine[i]);
//    }
//
//    // Add 1s border to both sides.
//    newLine.unshift(1);
//    newLine.push(1);
//
//    // Add the new line to the lines array.
//    lines.push(newLine);
//
//    if (lineLimit === lines.length) {
//        // Finished!
//        return lines;
//    } else {
//        // Generate the next line.
//        return pt(lineLimit, lines);
//    }
//}
////while
//
//var a = 1;
//var b = 10;
//while (a < b) {
//    a++;
//    console.log(a);
//}
//
//a = 1
//b = 1
//
//do {
//    a++;
//    console.log(a);
//}
//



//for(i=0; i<3; i++)
//  {
//       if(tablica[i].search(y)>=0)
//          console.log(i + '- wystepuje');
//       else
//           console.log(i + '- nie wystepuje');
//} 





//var y = "element";
//var a = 3;
//var b = "2";

//if(a==b){                                           //jesli ! zaprzeczenie
//  console.log('rowne')
//}
//else if(a>b){
//   console.log('wieksze')

//}   
//else{

//  console.log('mniejsze')
//}
//console.log(a===b);







//console.log(tablica[0]);
//console.log(tablica.length);
//console.log(tablica);
//tablica.push('trzeci element');

//var q =tablica.pop();
//console.log(q);
//console.log(tablica);
//tablica.unshift(w);
//var x="test";
//var y = "element";
//var wynik = y.indexOf(y);
//for (var i = 0; i < tablica.length; i++) {
//   console.log(tablica[i].indexOf(y));
//}



//var samochod = {
//  pojemnosc:2400,
//   moc:90,
//   silnik:'tdi',
//  marka: {
//   test: 'test'
//}
//};

//samochod.marka.producent = 'Opel';
//samochod.marka.model = 'Corsa'; 

//console.log(samochod);

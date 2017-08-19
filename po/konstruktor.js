function silnik(typ, pojemnosc, producent, model, moc) {
    this.typ = typ;
    this.pojemnosc = pojemnosc;
    this.producent = producent;
    this.model = model;
    this.moc = moc;
}

function pojazd(wlasciciel, data_produkcji, marka, model, waga, predkosc_maksymalna, przebieg, sr_zuzycia_paliwa, silnik) {
    this.wlasciciel = {
        imie,
        nazwisko,
    };
    this.data_produkcji = new Date("Fri, 17 Dec 1960 14:00:00 ")
    this.marka = marka;
    this.model = model;
    this.waga = waga;
    this.predkosc_maksymalna;
    predkosc_maksymalna;
    this.przebieg = przebieg;
    this.sr_zuzycia_paliwa = sr_zuzycia_paliwa;
    this.silnik = silnik;
}
pojazd.prototype.sprawdz_auto = function () {
    console.log("czesc" + this.wlasciciel.imie + "Wszystkie systemy sprawne," + this.marka + this.model + "wyprodukowany w" + this.data_produkcji + "o mocy" + this.moc + "gotowy do jazdy");
}

var silnik1 = new silnik ("benzyna",186,"VAG","FSI 2.0",156) ;  
var silnik2 = new silnik ("benzyna",123,"VAG","FSI 2.0",111) ;
var silnik3 = new silnik ("benzyna",166,"VAG","FSI 2.0",221) ;
var silnik4 = new silnik ("benzyna",196,"VAG","FSI 2.0",198) ;
var silnik5 = new silnik ("benzyna",236,"VAG","FSI 2.0",145) ;


var pojazd1= new pojazd ( "jan,Kowalski",)

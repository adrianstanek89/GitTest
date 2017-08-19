function zwrocObiekt(name) {
    var x = 7;

    function obiekt(name) {
        this.nowePole = x;
        this.imie = (name);
        this.przywitanie = function () {
            alert("hej jestem" + this.imie);
        }
    }
    return new obiekt(name);
}
var zmienna = zwrocObiekt(" zenek" );
zmienna.przywitanie();

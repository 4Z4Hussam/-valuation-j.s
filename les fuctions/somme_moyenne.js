function somme_moyenne() {
    var i = 0;
    var somme = 0;
    var moyenne = 0;
    var nombre = 0;
    nb = parseInt(prompt("moyenne"));
    notes = new Array(nb);
    for (i = 1; i <= nb; i++) {
        x = parseInt(prompt("entre un nombre"));
        notes[i - 1] = parseInt(prompt("entre un second nombre"));
        somme = x + notes[i - 1];
    }
    moyenne = somme / nb;
    alert("la somme des nombres est :" + somme);
    alert("la moyenne des nombres est :" + moyenne);
}
var élèves = [
    { id: 12 }, { id: 11 }, { id: 123 }, { id: 8 }, { id: 9 }, { id: 100 }, { id: 90 }, { id: 23 },
    { id: 22 }, { id: 99 }, { id: 198 }, { id: 202 }, { id: 11 }, { id: 19 }, { id: 78 }, { id: 112 }
];
function mélangerTableau(tableau) {
    return tableau.slice().sort(function () { return Math.random() - 0.5; });
}
var élèvesMélangés = mélangerTableau(élèves);
var groupes = [];
for (var i = 0; i < élèvesMélangés.length; i += 2) {
    var groupe = [élèvesMélangés[i], élèvesMélangés[i + 1]];
    groupes.push(groupe);
}
console.log("Groupes d'élèves :");
groupes.forEach(function (groupe, index) {
    console.log("Groupe ".concat(index + 1, ": ").concat(groupe[0].id, ", ").concat(groupe[1].id));
});


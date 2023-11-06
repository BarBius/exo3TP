interface Élève {
    id: number;
}
const élèves: Élève[] = [
    { id: 12 }, { id: 11 }, { id: 123 }, { id: 8 }, { id: 9 }, { id: 100 }, { id: 90 }, { id: 23 },
    { id: 22 }, { id: 99 }, { id: 198 }, { id: 202 }, { id: 11 }, { id: 19 }, { id: 78 }, { id: 112 }
];
function mélangerTableau<T>(tableau: T[]): T[] {
    return tableau.slice().sort(() => Math.random() - 0.5);
}
const élèvesMélangés = mélangerTableau(élèves);
const groupes: Élève[][] = [];
for (let i = 0; i < élèvesMélangés.length; i += 2) {
    const groupe: Élève[] = [élèvesMélangés[i], élèvesMélangés[i + 1]];
    groupes.push(groupe);
}
console.log("Groupes d'élèves :");
groupes.forEach((groupe, index) => {
    console.log(`Groupe ${index + 1}: ${groupe[0].id}, ${groupe[1].id}`);
});

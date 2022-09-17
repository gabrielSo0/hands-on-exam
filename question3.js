let consultants = [
    { name: 'Peyton Turner', company: 'Walker Inc' },
    { name: 'Isaias Fritsch', company: 'Walker Inc' },
    { name: 'Susana Wilderman', company: 'Nolan Inc' }
]

var test = JSON.stringify(consultants);


for (let i = 0; i < consultants; i++) {
    
    var template = `
        Walker Inc: [
            name: ${consultants[i].name},
            company: ${consultants[i].company}
        ]
    `;
    
}

console.log(test);
consultants.reduce((accumulator, currentValue) => {
    accumulator += currentValue.company + ""
}, '');
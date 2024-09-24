let day = {
    events: ["Ir a clase", "Comer"],
    accidente: true,
};

let journal = [
    {
        events: ["Ir a clase", "No comer"],
        accident: true,
    },
    {
        events: ["Ir a clase", "Comer"],
        accident: false,
    },
    {
        events: ["No ir a clase", "Comer"],
        accident: true,
    }
]

function addDay(events, accident){

    journal.push({events, accident})

}


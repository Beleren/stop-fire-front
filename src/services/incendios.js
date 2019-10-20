import eventos from './database';

let incendios = eventos.events.reduce((arr, event) => {
    if (event.categories.filter(c => c.id === 8).length !== 0) {
        let g = event.geometries[0];
        let d = new Date(g.date);
        arr.push({
            id: event.id,
            date: d,
            lng: g.coordinates[0],
            lat: g.coordinates[1],
            legal: (Math.random() >= .9)
        });
    }
    return arr;
}, []);

export default incendios;
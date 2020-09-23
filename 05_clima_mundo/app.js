

const argv = require('./config/yargs').argv;
const place = require('./place/place');

place.getPlaceLatLng( argv.direction )
    .then( ({ direction, lat, lng, temp, temp_min, temp_max, humidity, pressure}) => {
        console.log(`La temperatura de < ${ direction } > es de: ${ temp } °C`);
        console.log(`La humedad se encuentra a ${ humidity }%`);
        console.log(`La presión se encuentra a ${ pressure } hPa`);
        console.log(`Temperatura mínima alcanzada: ${ temp_min } °C`);
        console.log(`Temperatura máxima alcanzada: ${ temp_max } °C`);
        console.log(`${ direction } está a una lat: ${ lat } y lng: ${ lng }`);
    });




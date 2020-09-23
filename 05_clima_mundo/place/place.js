const axios = require('axios').default;

const getPlaceLatLng = async( place ) => {

    const encodedUlr = encodeURI(place);

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?`,
        timeout: 3000,
        params: {
            'q': encodedUlr,
            'APPID': "796fbc4b4dc88f5330f089880af20299",
            'units': 'metric',
        },
    });
  
    const resp = await instance.get();

    if ( resp.status !== 200){
        throw new Error(`No hay resultados para la dirección: ${ place }`);
    }

    let data = resp.data;
    let direction = data.name;
    let lat = data.coord.lat;
    let lng = data.coord.lon;
    let pressure = data.main.pressure;
    let humidity = data.main.humidity;
    let temp = data.main.temp;
    let temp_min = data.main.temp_min;
    let temp_max = data.main.temp_max;

    return {
        direction,
        lat,
        lng,
        temp,
        temp_min,
        temp_max,
        humidity,
        pressure
    }

}

module.exports = {
    getPlaceLatLng
};
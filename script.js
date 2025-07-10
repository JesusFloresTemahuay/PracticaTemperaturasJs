const CELCIUS = 0;
const KELVIN = 1;
const FAHRTNHEIT = 2;

class Converter{
    
    constructor(temperature, type){
        this.temperature = temperature;
        this.type = type;
    }


    getCelcius(){
        switch (this.type) {
            case CELCIUS:
                return this.temperature;
            case KELVIN:
                return this.temperature - 273.15;
            case FAHRTNHEIT:
                return  (this.temperature - 32) / 1.8;
        }
    }

    getKelvin(){
        switch (this.type) {
            case CELCIUS:
                return (this.temperature * 1) + 273.15;
            case KELVIN:
                return this.temperature;
            case FAHRTNHEIT:
                return ((this.temperature * 1) + 459.67) / 1.8;
        }
    }

    getFahrenheit(){
        switch (this.type) {
            case CELCIUS:
                return (this.temperature * 1.8 + 32);
            case KELVIN:
                return (this.temperature - 273.15)/1.8 + 32;
            case FAHRTNHEIT:
                return this.temperature ;
        }
    }

}


function getNameTemperature(type){
    switch (type) {
        case CELCIUS:
            return "Celcius";
        case KELVIN:
            return "Kelvin";
        case FAHRTNHEIT:
            return "Fahrtnheit";
    }
}

function getTemperature(){
    return document.querySelector(".temp").value;
}

function calculateTemperature(temperature, typein, typeout){
    let c = new Converter(temperature, typein);
    let resultado = 0;

    switch (typeout) {
        case CELCIUS:
            resultado = c.getCelcius();
            break;
        case KELVIN:
            resultado = c.getKelvin();
            break;
        case FAHRTNHEIT:
            resultado = c.getFahrenheit();
            break;
    }
    return resultado;
}

function recalculando(resumen, result, typein, typeout){
    resumen.innerHTML = `Convirtiendo ${getTemperature()} ${getNameTemperature(typein)} a ${getNameTemperature(typeout)}`;
    result.innerHTML = `Resultado: ${calculateTemperature(getTemperature(), typein, typeout)} ${getNameTemperature(typeout)}`;
}



document.addEventListener("DOMContentLoaded", () => {
    let resumen = document.querySelector(".resumen");
    let result = document.querySelector(".resultado");

    let typein = CELCIUS;
    let typeout = CELCIUS;

    document.querySelector(".cel").addEventListener("click", (e) => {
        typein = CELCIUS;
        recalculando(resumen, result, typein, typeout);
    });
    document.querySelector(".kel").addEventListener("click", (e) => {
        typein = KELVIN;
        recalculando(resumen, result, typein, typeout);

    });
    document.querySelector(".far").addEventListener("click", (e) => {
        typein = FAHRTNHEIT;
        recalculando(resumen, result, typein, typeout);
    });

    document.querySelector(".celr").addEventListener("click", (e) => {
        typeout = CELCIUS;
        recalculando(resumen, result, typein, typeout);

    });
    document.querySelector(".kelr").addEventListener("click", (e) => {
        typeout = KELVIN;
        recalculando(resumen, result, typein, typeout);

    });
    document.querySelector(".farr").addEventListener("click", (e) => {
        typeout = FAHRTNHEIT;
        recalculando(resumen, result, typein, typeout);
    });

});

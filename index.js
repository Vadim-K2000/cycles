const car1 = {
    color: 'Blue',
    isRepainted: false,
    brand: 'BMW',
    model: 'prototype10',
    doorsCount: 5,
    seatsNumber: 7,
    maxSpeed: 250,
    engien: {
        type: 'ICE',
        volume: 1.6,
    },
    goDrive: function goDrive() {
        alert( 'wroom - wroom !!!' );
    },
};

const car2 = {
    color: 'White',
    isRepainted: false,
    brand: 'Skoda',
    model: 'prototype10',
    doorsCount: 4,
    seatsNumber: 7,
    maxSpeed: 230,
    engien: {
        type: 'ICE',
        volume: 1.5,
    },
};

const car3 = {
    color: 'Black',
    isRepainted: true,
    brand: 'Opel',
    model: 'prototype10',
    doorsCount: 4,
    seatsNumber: 7,
    maxSpeed: 220,
    engien: {
        type: 'ICE',
        volume: 1.7,
    },
};


const cat = {
    name: 'Barsik',
    age: 10,
    run() {
        alert( 'Run Barsik, Run!!!' );
    },

    hide() {
        alert( 'Hide Barsik!' );
    },
};

function doBackFlip() {
    alert( 'Bak Flip' );
}

cat.dobackFlip = doBackFlip;

function User( name, surname ) {
    this.name = name;
    this.surname = surname;
}

const user1 = new User( 'Ivan', 'Ivanov' );
const user2 = new User( 'Maria', 'Ivanovna' );

function Country( title, population, size ) {
    this.title = title;
    this.population = population;
    this.size = size;
    this.density = function () {
        return this.population / this.size;
    };
}

const country1 = new Country( 'Ukraine', 41980000, 603628 );
const country2 = new Country( 'USA', 328200000, 9834000 );

function Ids( voltage, resist, ) {
    this.voltage = voltage;
    this.resist = resist;
    this.power = function () {
        return this.voltage / this.resist;
    };
}

const x = new Ids( 10, 5 );
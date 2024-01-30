export type SalesItemTyes = {
    name: string,
    price: number,
    photo: File,
}

const samp1 = require('./item1.jpg');
const samp2 = require('./item2.jpg');
const samp3 = require('./item3.jpg');
const samp4 = require('./item4.jpg');
const samp5 = require('./item5.jpg');
const samp6 = require('./item6.jpg');

export const items: any = [
    {
        name: 'African Donut Mix (Puff Puff)',
        price: 30,
        photo: samp1,
    },
    {
        name: 'Efo Riro',
        price: 30,
        photo: samp2,
    },
    {
        name: 'Asaro (Yam Porridge)',
        price: 30,
        photo: samp3,
    },
    {
        name: 'Chicken Stew',
        price: 30,
        photo: samp4,
    },
    {
        name: 'Asaro (Yam Porridge)',
        price: 30,
        photo: samp5,
    },
    {
        name: 'Asaro (Yam Porridge)',
        price: 30,
        photo: samp6,
    }
]

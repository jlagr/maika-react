import { festivales } from '../data/general'

export const getNacionales = () => {
    return festivales.filter(f => f.type === 'nacional').sort((a, b) => (a.year > b.year) ? 1 : -1).reverse();
}

export const getInternacionales = () => {
    return festivales.filter(f => f.type === 'internacional').sort((a, b) => (a.year > b.year) ? 1 : -1).reverse();
}
import { elenco } from "../data/elenco"
const getPaikam = () => {
    return elenco.find(o => o.id === 'Paikam');
}
export const getElencoPaikamById = (id) => {
    const paikam = getPaikam();
    return paikam.elenco.find(el => el.id === id);
} 

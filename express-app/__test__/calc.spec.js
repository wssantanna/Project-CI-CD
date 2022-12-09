
const calc = require('../src/calc');

describe('calc', () => {

    it('Deve retornar 5 quando 10 - 5', () => {

        const result = calc.subtract(10,5);

        expect(result).toEqual(5);
    })

    it('Deve retornar 4 quando 2 + 2', () => {
        
        const result = calc.sum(2,2);

        expect(result).toEqual(4);
    })

    it('Deve retornar 16 quando 4 * 4', () => {
        
        const result = calc.multiple(4,4);

        expect(result).toEqual(16);
    })

});
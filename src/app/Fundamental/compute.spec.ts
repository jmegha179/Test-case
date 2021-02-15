import { compute } from "./compute";

describe('compute', () => {
    it('It should return 0 if number is negative', () =>{
        const result = compute(-1);
        expect(result).toBe(0);
    })
    it('it should increment then input if number is postive', () =>{
        const result = compute(1);
        expect(result).toBe(2);
    })
})
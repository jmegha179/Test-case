import { greet } from "./string"

describe('greet', () => {
    it('It should contain name in message', () =>{
        expect(greet('Megha')).toContain('Megha')
    })
  
})
import {Lodash} from "./sync";

describe('Lodash compact',()=> {
    let _ = new Lodash()
    let arr:Array<boolean>
    beforeEach(()=> {

    })
    afterAll(()=> {

    })
    test('should be defined ',()=> {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })
    test('should remove falsy values from array',()=> {

         arr = [false,true,false,true,false]
        const res = [true,true]
        expect(_.compact(arr)).toEqual(res)
    })
    test('should not contain falsy values ',()=> {
         arr = [false,true,false,true,false]
        expect(_.compact(arr)).not.toContain(false)
    })
})
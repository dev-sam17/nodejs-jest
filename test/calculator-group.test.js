const { add, subtract, multiply} = require('../calculator')

describe('testing with done', () => {

    test('Adding two numbers',  (done) =>{
        expect(add(5, 5)).toStrictEqual(10)
        expect(add(100, 100)).toStrictEqual(200)
        done()
    })
    
    test('Subtracting two numbers',  (done) =>{
        expect(subtract(5, 5)).toStrictEqual(0)
        expect(subtract(400, 150)).toStrictEqual(250)
        done()
    })
    
    test('Multiplying two numbers',  (done) =>{
        expect(multiply(5, 5)).toStrictEqual(25)
        expect(multiply(200, 100)).toStrictEqual(20000)
        done()
    })
    
})

describe("testing with async", () => {

    test('Adding two numbers', async () =>{
        expect(add(5, 5)).toStrictEqual(10)
        expect(add(100, 100)).toStrictEqual(200)
    })
    
    test('Subtracting two numbers', async () =>{
        expect(subtract(5, 5)).toStrictEqual(0)
        expect(subtract(400, 150)).toStrictEqual(250)
    })
    
    test('Multiplying two numbers', async () =>{
        expect(multiply(5, 5)).toStrictEqual(25)
        expect(multiply(200, 100)).toStrictEqual(20000)
    })
    
})
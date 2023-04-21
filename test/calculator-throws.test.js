const { add, subtract, multiply} = require('../calculator-throwerror')

test('Addition: Throw Error when inputs are not numbers', async () => {
    expect(() => add('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})

test('Subtraction: Throw Error when inputs are not numbers', async () => {
    expect(() => subtract('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})

test('Multiplication: Throw Error when inputs are not numbers', async () => {
    expect(() => multiply('5', 5)).toThrowError(
        Error('Inputs should be numbers')
    )
})

test('Subtracting two numbers', async () =>{
    expect(subtract(5, 5)).toStrictEqual(0)
    expect(subtract(400, 150)).toStrictEqual(250)
})

const promise = require('../promise')

test('testing promise with error', async () => {

    promise('http://localhost:3000/tes').catch((err) => {
        expect(err).toEqual(Error('url is wrong'))
    })
})

test('testing promise with data', async () => {
    const data = await promise('http://localhost:3000/test')
    expect(data).toStrictEqual('test')
})
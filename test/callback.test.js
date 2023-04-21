const callback = require('../callback')

test('testing callback with error', (done) => {

    callback('http://localhost:3000/tes', (err) => {
        expect(err).toEqual(Error('Url is wrong'))
        done()
    })
})

test('Should return data', (done) => {

    callback('http://localhost:3000/test', (err, data) => {
        expect(data).toEqual('test')
        done()
    })
})
const rp = require('request-promise')

module.exports = (url) => {

    const p = new Promise((resolve, reject) => {
        if (url !== 'http://localhost:3000/test') {
            reject(Error('url is wrong'))
        } else {
            rp(url).then(data => resolve(data))
        }
    })

    return p
}
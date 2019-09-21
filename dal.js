const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'data.json')

function getBlogs(cb) {
    fs.readFile(file, 'utf-8', (err, data) => {
        const dataObj = JSON.parse(data)
        cb(err, dataObj)
    })
}

module.exports = { getBlogs }
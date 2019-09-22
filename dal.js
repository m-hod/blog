const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, 'data.json')

function getBlogs(cb) {
    fs.readFile(file, 'utf-8', (err, data) => {
        const blogsObj = JSON.parse(data)
        cb(err, blogsObj)
    })
}

function getBlog(id, cb) {
    fs.readFile(file, 'utf-8', (err, data) => {
        const dataObj = JSON.parse(data)
        const blog = dataObj.blogs.filter(blog => 
            blog.id === Number(id)
        )
        const blogObj = blog[0]
        cb(err, blogObj)
    })
}

module.exports = {
    getBlogs,
    getBlog
}
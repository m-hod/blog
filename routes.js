const express = require('express')

const { 
    getBlogs,
    getBlog
} = require('./dal')

const router = express.Router()

router.get('/', (req, res) => {
    getBlogs((err, blogsObj) => {
        if (err) throw err
        blogsObj.blogs.map((blog, i) => {
            (i % 2 !== 0)
                ? blog.rightAligned = true
                : blog.leftAligned = true
        })
        blogsObj.blogs.reverse()
        res.render('home', blogsObj)
    })
})

router.get('/blog/:id', (req, res) => {
    const id = req.params.id
    getBlog(id, (err, blogObj) => {
        if (err) throw err
        res.render('blog-post', { ...blogObj, layout: 'blog-post' })
    })
})

module.exports = router


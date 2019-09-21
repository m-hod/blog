const express = require('express')

const { getBlogs } = require('./dal')

const router = express.Router()

router.get('/', (req, res) => {
    getBlogs((err, blogsObj) => {
        if (err) throw err
        blogsObj.blogs.map((blog, i) => {
            (i % 2 !== 0)
                ? blog.rightAligned = true
                : blog.leftAligned = true
        })
        res.render('home', blogsObj)
    })
})

// router.get('/blog/:id', (req, res) => {
//     const id = req.params.id
//     res.render('blog-entry')
// })

module.exports = router

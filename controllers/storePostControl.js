const BlogPost = require('../models/BlogPost')

module.exports = (req,res)=>{
    // console.log(req.body)
    const blog = req.body
    blog.createAt = new Date()
    BlogPost.create(blog,(error,data)=>{
        if(error){
            return res.render('createPost')
        }
        res.redirect('/')
        res.end()
      })
}
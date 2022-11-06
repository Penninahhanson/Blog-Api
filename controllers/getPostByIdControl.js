const BlogPost = require('../models/BlogPost')

module.exports = async(req,res)=>{
   // sending back the data for each post blog
   const id = req.params.id
   const blogposts = await BlogPost.findById(id)
   if(blogposts.readingCount == null){
   
      console.log( BlogPost.readingCount = parseInt(1))
      BlogPost.save()
     return
   }
   BlogPost.readingCount ++;
   BlogPost.save()
    res.status(200)
   res.render('post',{
     blogposts
   })
}
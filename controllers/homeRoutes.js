const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const withAuth = require('../utils/auth');

//get all posts which include their user information
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });
    
    //serializing data for tempate to read 
    const posts = postData.map((post) => post.get({ plain: true }));
    
    // pass data into homepage template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to add new post only when logged in
router.get('/newpost', withAuth, (req, res) => {
  //rendering new post template
  res.render('newpost', {
      logged_in:true
  });
});

//get post by its id and include its comments and user associated with the post
  //comments should also include user 
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include:[
            {
              model: User,
            }
          ]
        },
        {
          model: User,
        },
      ],
    });

    const post = postData.get({ plain: true });

    //pass post data to post template
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//update post by its id and only when logged in 
  //only user who created the post will be allowed to update
router.get("/updatepost/:id", withAuth, async (req, res) => {
  try {
      const updatePostData = await Post.findOne({
          where: {
              id: req.params.id,
              userId: req.session.userId
          }
      });
      if (!updatePostData) {
          res.status(404).json({ message: "You cannot update this post. Only post creator who can update this post" });
          return;
      };
      const updatePost = updatePostData.get({ plain: true });

      //pass updated post information to updatepost template
      res.render("updatepost", {
          ...updatePost,
          logged_in: true
      });
  } catch (err) {
      res.status(500).json(err)
  }
});

//route to dashboard and only when loggedin
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    //find user by session Id and include post attributes
    const userData = await User.findByPk(req.session.userId, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    //pass user info to dashboard template
    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to login
router.get('/login', (req, res) => {
  //render login template
  res.render('login');
});

//route to signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;

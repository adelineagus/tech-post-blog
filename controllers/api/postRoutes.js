const router = require("express").Router();
const { User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

//get all post
router.get("/", async (req, res) => {
    try {
        const allPostData = await Post.findAll({
            include: [
                { model: User,
                attributes: { exclude: ["password"]} 
            },
            ]
        }); 
        const allPosts = allPostData.map((post) => post.get({ plain: true }));
        res.json(allPosts);
    } catch (err) {
        res.status(500).json(err); 
    }
})

//get post with certain id
router.get("/:id", async (req, res) => {
    try {
        const onePostData = await Post.findByPk(req.params.id); 
        res.json(onePostData); 
    } catch (err) {
        res.status(500).json(err);
    }
})

//post new post only when logged in
router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete a post by its id and only when logged in
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const deletedPost = await Post.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId
            },
        });
        if (!deletedPost) {
            res.status(404).json({ message: "No post found with this ID." });
            return;
        }
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})


//update post by its id and only when logged in
router.put("/:id", withAuth, async (req, res) => {
    try {
        const updatedPost = await Post.update({
            title: req.body.title,
            postText: req.body.postText
        },
            {
                where: {
                    id: req.params.id,
                    userId: req.session.userId
                }
            });
        if (!updatedPost) {
            res.status(404).json({ message: "No post found with this ID." });
            return;
        };
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
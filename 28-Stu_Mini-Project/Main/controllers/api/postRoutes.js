const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

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

router.get("/:id", async (req, res) => {
    try {
        const onePostData = await Post.findByPk(req.params.id,{
        }); 
        res.json(onePostData); 
    } catch (err) {
        res.status(500).json(err);
    }
})


router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId,
        });
        console.log(newPost); 
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

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

module.exports = router;
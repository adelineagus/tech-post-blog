const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//get all comments
router.get("/", async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            include: [
                {
                    model: Post,
                    include: {
                        model: User,
                        attributes: { exclude: ["password"] },
                    }
                },
                
            ]
        })
        res.json(allComments);
    } catch (err) {
        res.status(500).json(err); 
    }
});

//post new comment only when logged in
router.post("/", withAuth, async (req, res) => {
     try {
        const newComment = await Comment.create({
            ...req.body,
            postId: req.body.postId,
            userId: req.session.userId
        });
        res.status(200).json(newComment);
     } catch (err) {
         res.status(400).json(err);
     }
}); 

module.exports = router;
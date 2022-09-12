const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require("./commentData.json");
const {post} = require('../controllers/homeRoutes')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //create users
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //create post of each posts
  for (const post of postData) {
    await Post.create({
      ...post,
      //assign random user id
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  //create comment for each comments
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      //assign random user ID
      userId: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();

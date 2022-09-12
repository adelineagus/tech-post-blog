# Tech Post Blog

  ## Description
  The purpose of this project is to build CMS-style blog where webdevs can post their blog posts and comment on other devs' posts. This project follow MVC paradigm and using Handlebars.js, sequalize, and express-session npm. 

  Achievements:
  1. When visiting site for the first time, user is presented with existing blog posts, navigation links for homepage, dashboard, and login
  2. When clicking link to dashboard, user is redirected to either has to signup or sign in
  3. When signing up, user credentials are saved and user is logged in to the site
  4. When signed-in, user will see option to logout
  5. Homepage presents existing blog posts with its title and date created
  6. When existing blog post is clicked, user is presented with post title, contents, post creator's email, date created, comments (with creator information of the comments and date creation for the comments).
  7. User can only leave comment when signed in. 
  8. Deleting and updating post will only be limited to creator of the post (which also means that user has to sign in). Once post is deleted/updated, user will be taken back to dashboard
  9. When comment is submitted, comment is saved and post is updated to display the comment. 
  10. Dashboard page presents posts that the logged-in user created and option to add new post
  11. When new post is clicked, user is prompted to enter title and contents for the psot
  12. Once new post is submitted, post will be saved and user will be taken to updated dashboard
  13. When logout button is clicked, user is signed out 
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  Clone repo, download node, use express,handlebars, express-session, mySQL, sequelize, and .env packages. 

  Run npm i to install packages needed. 

  To use mySQL: run mysql -u root -p in terminal, and run SOURCE db/schema.sql file.

  Repo: https://github.com/adelineagus/tech-post-blog

  ## Usage
  In terminal, run npm run seed and npm run start . Visit insomnia to test app. 

  Screenshot GET : [link](./images/getproducts.png)

  Screenshot GET by id: [link](./images/gettagsbyid.png)
  
  Screenshot CREATE: [link](./images/createcategories.png)

  Screenshot PUT: [link](./images/updatetags.png)

  Screenshot DELETE: [link](./images/deleteproducts.png)
  
  Setting up application walkthrough link: https://drive.google.com/file/d/1UYMxdaIii3-mWA_40kV-_mcq5Tu_qYFH/view

  Insomnia walkthrough link: https://drive.google.com/file/d/1-U53ahkEGhGBjPDRW0zChEyHiIKEKx0-/view

  ## Credits
  Collaborators: Adeline Aguspranoto

  How to contribute: please email collabolators

  ## Tests
  No tests

  ## Questions
  To see more projects, visit my github page at https://github.com/adelineagus. If you have any questions regarding this project, feel free to contact me at adelineaguspranoto@gmail.com.
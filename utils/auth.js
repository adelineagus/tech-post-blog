const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect to login page
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    //otherwise, execute next action/function
    next();
  }
};

module.exports = withAuth;

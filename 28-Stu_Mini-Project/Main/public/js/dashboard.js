//when create post button is clicked, redirect to new post page
const newPostButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/newpost');
};

document.querySelector('#new-post-button').addEventListener('click', newPostButtonHandler);

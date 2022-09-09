// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#post-title').value.trim();
//   console.log(title);
//   const postText = document.querySelector('#post-text').value.trim();
//   console.log(postText);

//   if (title && postText) {
//     const response = await fetch(`/api/posts`, {
//       method: 'POST',
//       body: JSON.stringify({title, postText}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to create post');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

const newPostButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/newpost');
};

// document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);


document.querySelector('#new-post-button').addEventListener('click', newPostButtonHandler);
document.querySelector('#post-list').addEventListener('click', delButtonHandler);
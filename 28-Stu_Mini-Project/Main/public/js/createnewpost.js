const newFormHandler = async (event) => {
  event.preventDefault();

  //grab user input for post title
  const title = document.querySelector('#post-title').value.trim();
  //grab user input for text in the post
  const postText = document.querySelector('#post-text').value.trim();
  
  if (title && postText) {
    // post the post
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({title, postText}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    //if response is ok, redirect page to dashboard page
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
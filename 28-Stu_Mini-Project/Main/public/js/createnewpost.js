const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const postText = document.querySelector('#post-text').value.trim();
  
    if (title && postText) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({title, postText}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };

  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);
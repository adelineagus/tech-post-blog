const updatePostHandler = async (event) => {
    event.preventDefault();

    //grab user input on post title
    const title = document.querySelector('#post-title').value.trim();
    //grab user input on post text
    const postText = document.querySelector('#post-text').value.trim();
    //get id of post that user wants to update
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (title && postText) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, postText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      //if response is ok, redirect to dashboard page
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert('Failed to edit post');
      }
    }
  };

  document.querySelector('#update-post-form').addEventListener('submit', updatePostHandler);
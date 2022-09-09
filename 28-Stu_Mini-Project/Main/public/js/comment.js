const newCommentHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector('#comment-text').value.trim();
  console.log(commentText);
  const postId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

if(commentText) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ postId, commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/post/'+postId);
    } else {
      alert('Failed to create comment');
    }
  }
};

document.querySelector('#new-comment-form').addEventListener('submit', newCommentHandler);
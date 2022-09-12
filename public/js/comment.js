const newCommentHandler = async (event) => {
  event.preventDefault();

  //get comment entered by user
  const commentText = document.querySelector('#comment-text').value.trim();
  //find postid
  const postId = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

if(commentText) {
  //post comment
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ postId, commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //if response is ok, redirect back to the single post with that id
    if (response.ok) {
      document.location.replace('/post/'+postId);
    } else {
      alert('Failed to create comment');
    }
  }
};

document.querySelector('#new-comment-form').addEventListener('submit', newCommentHandler);
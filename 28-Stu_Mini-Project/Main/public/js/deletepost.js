const delButtonHandler = async (event) => {
    if(event.target){
    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    });
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete post. Only post creater who can delete this post');
    }
}
  };

  document.querySelector('#delete-post').addEventListener('click', delButtonHandler);
  
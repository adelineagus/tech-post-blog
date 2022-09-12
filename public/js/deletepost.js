const delButtonHandler = async (event) => {
    if(event.target){
        //grab id
        const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
        //delete post by id
        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        // redirect page to dashboard when response is ok
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post. Only post creater who can delete this post');
        }
    }
};

document.querySelector('#delete-post').addEventListener('click', delButtonHandler);
  
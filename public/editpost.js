const editPost = async (e) => {
    e.preventDefault(); 
    const urlString = window.location.toString().split('/')
    const postId  = urlString[4];
  
    const contents = $('#content-textarea').val();
    const title = $('#title-input').val();

    const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT', 
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        alert('Post Updated')
        document.location.replace('/dashboard');
    } else {
        alert(`There was an issue edit your blog post. Please try again.`);
    }
}

$('#update-post').click(editPost);
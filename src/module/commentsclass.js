const commentsPosts = async (data) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KJQTYOnUpwBlTbsrrfYv/comments',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: data.item_id,
        username: data.username,
        comment: data.comment,
      }),
    });
};

export default commentsPosts;
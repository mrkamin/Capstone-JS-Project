export const commentsPosts = async (data) => {
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/comments?item_id=${data.item_id}`,
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
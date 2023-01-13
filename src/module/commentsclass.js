export const commentsPosts = async (data) => {
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/comments?item_id=${data.item_id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: data.item_id,
          username: data.username,
          comment: data.comment,
        }),
      }
    );
  };
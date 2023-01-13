export const commentGets = async (f) => {
    const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/comments/?item_id=${f}`
      
    );
    const datas = await res.json();
    return datas;
  };
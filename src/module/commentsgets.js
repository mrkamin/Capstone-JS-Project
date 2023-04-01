export const commentGets = async (f) => {
  /*  const respond = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3c5S8ISaM4go4dczIYec/comments/?item_id=${f}`); */
  const respond = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KJQTYOnUpwBlTbsrrfYv/comments/?item_id=${f}`);

  const mydata = await respond.json();
  return mydata;
};

export default commentGets;
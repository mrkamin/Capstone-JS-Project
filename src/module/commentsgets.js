export const commentGets = async (f) => {
  const respond = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R0U3YhWaag3EdpAQTbkm/comments/?item_id=${f}`);

  const mydata = await respond.json();
  return mydata;
};

export default commentGets;